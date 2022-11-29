import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";
import Webcam from "react-webcam";

// Current disabled
const CameraCapture: React.FC = () => {
  return (
    <>
      <Webcam height={720} screenshotFormat="image/jpeg" width={1280}/>
        {/* {({ getScreenshot }) => ( */}
          {/* <button
            onClick={() => {
              const imageSrc = getScreenshot();
            }}
          >
            Capture photo
          </button> */}
        {/* )} */}
      {/* </Webcam> */}
    </>
  );
};

export default CameraCapture;
