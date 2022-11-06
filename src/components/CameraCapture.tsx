import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";
import Webcam from "react-webcam";

// type CardProps = {
//   plant: Plant;
//   // paragraph: string
// };

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

      {/* <div className="card-compact card w-max bg-base-100 shadow-xl">
        <figure>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{plant.name}</h2>
          <div className="badge-secondary badge">{plant.category}</div>

          <p>{plant.description}</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Delete</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CameraCapture;
