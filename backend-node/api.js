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
uploadImage = require('./routes/uploadImage');
app.use('/', uploadImage);

// server listens in some port
// if port 300 is not available, try setting port to something else
// in the system's environment variables
// set PORT = ... for Windows, export PORT = ... for macOS
let env = process.argv[2] || 'local'
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
    console.log(`Environment is ${env}`);
})