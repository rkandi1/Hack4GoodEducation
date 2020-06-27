/*
    Main API for BACKEND

    Hack4Good
*/

// Basic machinery
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// authentication

// post request to upload an image

// multer
const multer = require('multer');
var upload = multer({dest: 'image-upload/'});

// axios
const axios = require('axios').default;
let subscriptionKey = process.env['FACE_SUBSCRIPTION_KEY'];
let endpoint = process.env['FACE_ENDPOINT'] + '/face/v1.0/detect';

app.post('/image-upload', upload.single('face-image.jpg'), (req, res, next) => {
    console.log("About to send POST request to AXIOS!")
    let imageUrl = 'http://localhost:3000/image-uploads/upload/face-image.jpg';
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

// server listens in some port
// if port 300 is not available, try setting port to something else
// in the system's environment variables
// set PORT = ... for Windows, export PORT = ... for macOS
let env = process.argv[2] || 'local'
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
    console.log(`Environment is ${env}`);
});