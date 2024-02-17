# import system library
import sys
from ultralytics import YOLO
import cv2


imagePath = sys.argv[1]
img = cv2.imread(imagePath)

modelPath = sys.argv[2]
model = YOLO(modelPath)

threshold = 0.5

results = model(img)[0]

for result in results.boxes.data.tolist():
  x1, y1, x2, y2, score, class_id = result
  if score > threshold:
    cv2.rectangle(img, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 8)
    cv2.putText(img, results.names[int(class_id)].upper(), (int(x1), int(y1 - 10)),
                        cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3, cv2.LINE_AA)
    
    
cv2.imwrite(imagePath, img)

# print(path)
print(len(results))
