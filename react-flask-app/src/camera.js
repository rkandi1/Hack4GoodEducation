// Source: https://codepen.io/mozmorris/pen/gOOoqpw
// https://www.npmjs.com/package/react-webcam
import React from 'react';
import Webcam from "react-webcam";
import './camera.css';
const axios = require('axios').default;
var questionId = 0

const WebcamCapture = (props) => {
    var imageSrc = null
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    var delayInMilliseconds = 1000; //1 second
    questionId = props.questionId

    function capture() {
      console.log("Captured emotions.")
      if(webcamRef.current != null) {
        imageSrc = webcamRef.current.getScreenshot();
      }
      setImgSrc(imageSrc);
    }

    function send_pic() {
      console.log('sending pic')
      capture()   
      if(imageSrc != null) {
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
        formData.append('questionID', questionId)
        formData.append('image.png', the_file)
        axios({
          method : "post",
          url: "http://localhost:3000/image-upload",
          data: formData,
          headers: {'Content-Type': 'multipart/form-data' }
        })
      }
    }

    function start(){
      setInterval(send_pic, 5000);
    }
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          height={200}
          width={200}
          minScreenshotHeight={500}
          minScreenshotWidth={500}
        />
        <button onClick={start}>Start</button>
      </>
    );
  };  

  export default WebcamCapture;