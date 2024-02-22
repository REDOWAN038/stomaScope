# import system library
import sys
import os
import shutil
from ultralytics import YOLO
import cv2


def get_fourcc(video_path):
    _, ext = os.path.splitext(video_path)
    ext = ext.lower()

    if ext == '.mp4':
        return cv2.VideoWriter_fourcc(*'mp4v')
    elif ext == '.avi':
        return cv2.VideoWriter_fourcc(*'XVID')
    elif ext == '.mov':
        return cv2.VideoWriter_fourcc(*'X264')
    else:
        # Default codec
        return cv2.VideoWriter_fourcc(*'mp4v')


videoPath = sys.argv[1]
videoProcessOutputPath = sys.argv[2]
videoProcessOutputPath = os.path.join(videoProcessOutputPath, os.path.basename(videoPath))
# shutil.copy(videoPath, videoProcessOutputPath)

cap = cv2.VideoCapture(videoPath)

ret, frame = cap.read()
H, W, _ = frame.shape

fourcc = get_fourcc(videoPath)

out = cv2.VideoWriter(videoProcessOutputPath, fourcc, int(cap.get(cv2.CAP_PROP_FPS)), (W, H))


modelPath = sys.argv[3]
model = YOLO(modelPath)
threshold = 0.5

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

os.replace(videoProcessOutputPath, videoPath)

print(videoPath)