import os
import cv2
from azure.cognitiveservices.vision.face import FaceClient
from msrest.authentication import CognitiveServicesCredentials
import io

FILE_NAME = "test.jpg" # Your file name here

# Set your environment variables first
KEY = os.environ['FACE_SUBSCRIPTION_KEY']
ENDPOINT = os.environ['FACE_ENDPOINT']

image = cv2.imread(FILE_NAME)
ret, buf = cv2.imencode('.jpg', image)
stream = io.BytesIO(buf)

face_client = FaceClient(ENDPOINT, CognitiveServicesCredentials(KEY))
faces = face_client.face.detect_with_stream(stream, return_face_attributes=["emotion"])
for face in faces:
    print(face.face_attributes.emotion)

