// Source: https://codepen.io/mozmorris/pen/gOOoqpw
// https://www.npmjs.com/package/react-webcam
import React from 'react';
import Webcam from "react-webcam";
import './camera.css';
const axios = require('axios').default;

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      var arr = imageSrc.split(',');
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      var the_file = new File([u8arr], "image.png", {type:mime})
      let formData = new FormData()
      formData.append('image.png', the_file)
      axios({
        method : "post",
        url: "http://localhost:3000/image-upload",
        data: formData,
        headers: {'Content-Type': 'multipart/form-data' }
      })
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc}
            alt="Error: Can't get screenshot"
          />
        )}
      </>
    );
  };  

  export default WebcamCapture;