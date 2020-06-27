/*
    Handles uploading an image to the API...
*/

// basic machinery
const express = require('express');
var router = express.Router();

const multer = require('multer');
var upload = multer({dest: 'uploads/'});

router.post('/image-upload', upload.single('student-image'), (req, res, next) => {
    // req.file is the image file
    // TODO: Connect to the Azure API
});

module.exports = router;