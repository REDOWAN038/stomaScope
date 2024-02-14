# import system library
import cv2 as cv
import sys

path = sys.argv[1]
img = cv.imread(path)
gray_image = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
cv.imwrite(path, gray_image)



# print(path)
print(path)
