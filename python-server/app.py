# Import necessary modules
from flask import Flask, request, jsonify
# from celery import Celery
import requests
import numpy as np
import cv2
from cloudinary.uploader import upload
from ultralytics import YOLO
from dotenv import load_dotenv
import os

# Initialize Celery
# celery = Celery(__name__)
app = Flask(__name__)

# Load environment variables
load_dotenv('.env')

# Cloudinary configuration
cloudinary_config = {
    'cloud_name': os.getenv('CLOUDINARY_NAME'),
    'api_key': os.getenv('CLOUDINARY_API_KEY'),
    'api_secret': os.getenv('CLOUDINARY_SECRET_KEY'),
    'folder': os.getenv('CLOUDINARY_IMAGE_FOLDER')
}

# Initialize YOLO model
model = YOLO('best.pt')

# Threshold for YOLO
threshold = 0.5

# Define Celery configuration
# celery.conf.broker_url = os.getenv('CELERY_BROKER_URL')
# celery.conf.result_backend = os.getenv('CELERY_BROKER_URL')

# Define Celery task
# @celery.task
# def process_image_task(image_url):
#     # Download image
#     response = requests.get(image_url)
#     if response.status_code != 200:
#         return {'error': 'Failed to retrieve image from URL'}

#     # Convert image data to numpy array
#     nparr = np.frombuffer(response.content, np.uint8)
#     img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

#     # Process image with YOLO
#     results = model(img)[0]

#     # Draw bounding boxes on the image
#     for result in results.boxes.data.tolist():
#         x1, y1, x2, y2, score, class_id = result
#         if score > threshold:
#             cv2.rectangle(img, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 8)
#             cv2.putText(img, results.names[int(class_id)].upper(), (int(x1), int(y1 - 10)),
#                         cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3, cv2.LINE_AA)

#     # Encode the processed image to bytes
#     _, img_bytes = cv2.imencode('.jpg', img)
#     img_array = np.array(img_bytes).tobytes()

#     # Upload processed image to Cloudinary
#     uploaded_image = upload(img_array, **cloudinary_config)

#     # Return URL of the uploaded image and count of objects detected
#     return {'uploaded_image_url': uploaded_image['url'], 'count': len(results)}

# Refactor Flask endpoint to trigger Celery task
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
    # results = model(img)[0]

    # # Draw bounding boxes on the image
    # for result in results.boxes.data.tolist():
    #     x1, y1, x2, y2, score, class_id = result
    #     if score > threshold:
    #         cv2.rectangle(img, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 8)
    #         cv2.putText(img, results.names[int(class_id)].upper(), (int(x1), int(y1 - 10)),
    #                     cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3, cv2.LINE_AA)

    # Encode the processed image to bytes
    _, img_bytes = cv2.imencode('.jpg', img)
    img_array = np.array(img_bytes).tobytes()

    # Upload processed image to Cloudinary
    uploaded_image = upload(img_array, **cloudinary_config)

    # Return URL of the uploaded image and count of objects detected
    return {'uploaded_image_url': uploaded_image['url'], 'count': len(results)}

# @app.route('/api/v1/tasks/<task_id>', methods=['GET'])
# def get_task_result(task_id):
#     # Retrieve task result
#     result = process_image_task.AsyncResult(task_id)

#     # Check task status
#     if result.ready():
#         # Task is completed, return the result
#         result_data = result.get()
#         if 'error' in result_data:
#             return jsonify({'status': 'error','error': result_data['error']}), 400
#         return jsonify({'status': 'success', 'uploaded_image_url': result_data['uploaded_image_url'], 'count': result_data['count']}), 200
#     else:
#         # Task is still pending
#         return jsonify({'status': 'pending'}), 202



@app.route('/')
def index():
    return "hellow world"


if __name__=='__main__':
    app.run(debug=True)