from flask import Flask, request, jsonify
from cloudinary.uploader import upload
from ultralytics import YOLO
from dotenv import load_dotenv
import numpy as np
import cv2
import os

load_dotenv('.env')

app = Flask(__name__)

# Cloudinary configuration
cloudinary_config = {
    'cloud_name': os.getenv('CLOUDINARY_NAME'),
    'api_key': os.getenv('CLOUDINARY_API_KEY'),
    'api_secret': os.getenv('CLOUDINARY_SECRET_KEY'),
    'folder': os.getenv('CLOUDINARY_IMAGE_FOLDER')
}

# Initialize YOLO model
current_directory = os.path.dirname(os.path.realpath(__file__))
modelPath = os.path.join(current_directory, 'best.pt')
model = YOLO(modelPath)

# Threshold for YOLO
threshold = 0.5

@app.route('/')
def index():
    return "hello world"

@app.route('/api/v1/files/image', methods=['POST'])
def process_image():
    # Check if the request contains 'image_url'
    if 'filePath' not in request.json:
        return jsonify({'error': 'Image URL not provided'}), 400
    
    # Read image from Cloudinary URL
    image_url = request.json['filePath']
    img = cv2.imread(image_url)

    # Process image with YOLO
    results = model(img)[0]
    
    # Draw bounding boxes on the image
    for result in results.boxes.data.tolist():
        x1, y1, x2, y2, score, class_id = result
        if score > threshold:
            cv2.rectangle(img, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 8)
            cv2.putText(img, results.names[int(class_id)].upper(), (int(x1), int(y1 - 10)),
                        cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3, cv2.LINE_AA)
    
    _, img_bytes = cv2.imencode('.jpg', img)
    img_array = np.array(img_bytes).tobytes()

    # Upload processed image to Cloudinary
    uploaded_image = upload(img_array, **cloudinary_config)

    # Return URL of the uploaded image
    return jsonify({'uploaded_image_url': uploaded_image['url'], 'count':len(results)}), 200

if __name__ == '__main__':
    app.run(debug=True)
