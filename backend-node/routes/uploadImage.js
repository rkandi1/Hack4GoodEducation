/*
    Handles uploading an image to the API...
*/

// basic machinery
const express = require('express');
var router = express.Router();

// multer
const multer = require('multer');
var upload = multer({dest: 'image-uploads/uploads/'});

// axios
const axios = require('axios').default;
let subscriptionKey = process.env['FACE_SUBSCRIPTION_KEY'];
let endpoint = process.env['FACE_ENDPOINT'] + '/face/v1.0/detect';

router.post('/image-upload', upload.single('student-image'), (req, res, next) => {
    let imageUrl = 'http://localhost:3000/image-uploads/upload/student-image';
    axios({
        method: 'post',
        url: endpoint,
        params: {
            returnFaceId: true,
            returnFaceLandmarks: false,
            returnFaceAttributes: 'emotion'
        },
        data: {
            url: imageUrl
        }
    }).then( function(response) {
        console.log('Status text: ' + response.status);
        console.log('Status text: ' + response.statusText);
        response.data.forEach((face) => {
            console.log('Emotion: ' + JSON.stringify(face.faceAttributes.emotion));
        });
    }).catch(function (error) {
        console.log(error);
    });
});

module.exports = router;  