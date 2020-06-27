/*
    Handles uploading an image to the API...
*/

// basic machinery
const express = require('express');
const http = require('http')
const querystring = require('querystring')
var router = express.Router();

const multer = require('multer');
var upload = multer({dest: 'uploads/'});

router.post('/image-upload', upload.single('student-image'), (req, res, next) => {
    // req.file is the image file
    // TODO: Connect to the Azure API
    var face_api_key = process.env.FACE_KEY
    var face_endpoint = provess.env.FACE_ENDPOINT 
    const params = {
        "returnFaceAttributes" : "emotion"
    }
    const options = {
        url : face_endpoint,
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
            'Ocp-Apim-Subscription-Key' : face_api_key
        }
    }
    // Need to add to the request body
    
});

module.exports = router;