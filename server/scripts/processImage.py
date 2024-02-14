# import system library
import cv2 as cv
import sys

path = sys.argv[1]
img = cv.imread(path)
resized_img = cv.resize(img, (320, 240))
cv.imwrite("/Users/red2724/Pictures/4.png", resized_img)



# print(path)
print(path)
