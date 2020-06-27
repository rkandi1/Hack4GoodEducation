// Source: https://codepen.io/mozmorris/pen/gOOoqpw
// https://www.npmjs.com/package/react-webcam
import React from 'react';
import Webcam from "react-webcam";
import './camera.css';

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
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