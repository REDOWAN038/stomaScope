# Import necessary modules
from flask import Flask, request, jsonify
import requests
import numpy as np
import cv2
from cloudinary.uploader import upload
from ultralytics import YOLO
from dotenv import load_dotenv
import os

app = Flask(__name__)

# Load environment variables
load_dotenv('.env')

# Cloudinary configuration
cloudinary_config_image = {
    'cloud_name': os.getenv('CLOUDINARY_NAME'),
    'api_key': os.getenv('CLOUDINARY_API_KEY'),
    'api_secret': os.getenv('CLOUDINARY_SECRET_KEY'),
    'folder': os.getenv('CLOUDINARY_IMAGE_FOLDER')
}

cloudinary_config_video = {
    'cloud_name': os.getenv('CLOUDINARY_NAME'),
    'api_key': os.getenv('CLOUDINARY_API_KEY'),
    'api_secret': os.getenv('CLOUDINARY_SECRET_KEY'),
    'folder': os.getenv('CLOUDINARY_VIDEO_FOLDER')
}

# Initialize YOLO model
model = YOLO('best.pt')

# Threshold for YOLO
threshold = 0.5

@app.route('/api/v1/files/image', methods=['POST'])
def process_image():
    # Check if the request contains 'filePath'
    if 'filePath' not in request.json:
        return jsonify({'error': 'Image URL not provided'}), 400

    # Get image URL from request
    image_url = request.json['filePath']
    response = requests.get(image_url)
    nparr = np.frombuffer(response.content, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    results = model(img)[0]

    # Draw bounding boxes on the image
    for result in results.boxes.data.tolist():
        x1, y1, x2, y2, score, class_id = result
        if score > threshold:
            cv2.rectangle(img, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 8)
            cv2.putText(img, results.names[int(class_id)].upper(), (int(x1), int(y1 - 10)),
                        cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3, cv2.LINE_AA)

    # Encode the processed image to bytes
    _, img_bytes = cv2.imencode('.jpg', img)
    img_array = np.array(img_bytes).tobytes()

    # Upload processed image to Cloudinary
    cloudinary_response = upload(img_array, **cloudinary_config_image)

    # Return URL of the uploaded image and count of objects detected
    return {'uploaded_url': cloudinary_response['secure_url'], 'count': len(results)}



@app.route('/api/v1/files/video', methods=['POST'])
def process_video():
    # Check if the request contains 'filePath'
    if 'filePath' not in request.json:
        return jsonify({'error': 'Video URL not provided'}), 400

    # Get image URL from request
    video_url = request.json['filePath']
    response = requests.get(video_url, stream=True)
    with open("temp_video.mp4", 'wb') as f:
        for chunk in response.iter_content(1024):
            f.write(chunk)

    cap = cv2.VideoCapture("temp_video.mp4")
    ret, frame = cap.read()
    H, W, _ = frame.shape
    out = cv2.VideoWriter("output.mp4", cv2.VideoWriter_fourcc(*'mp4v'), int(cap.get(cv2.CAP_PROP_FPS)), (W, H))


    while ret:
        results = model(frame)[0]

        for result in results.boxes.data.tolist():
            x1, y1, x2, y2, score, class_id = result

            if score > threshold:
                cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 8)
                cv2.putText(frame, results.names[int(class_id)].upper(), (int(x1), int(y1 - 10)),
                            cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3, cv2.LINE_AA)

        out.write(frame)
        ret, frame = cap.read()

    cap.release()
    out.release()
    cv2.destroyAllWindows()

    cloudinary_response = upload("output.mp4", resource_type="video", **cloudinary_config_video)
    os.remove("output.mp4")
    os.remove("temp_video.mp4")

    return {'uploaded_url': cloudinary_response['secure_url']}


@app.route('/')
def index():
    return "hello world"


if __name__=='__main__':
    app.run(debug=True)