import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";

// type CardProps = {
//   plant: Plant;
//   // paragraph: string
// };

const TaskCard: React.FC<{ plant: Plant }> = ({ plant }) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl space-y-4 min-w-full">
        <figure>
          {/* <img src="https://placeimg.com/200/280/arch" alt="Movie" /> */}
          <Image src={plant.image} alt={plant.name} width={100} height={1000} className="h-48 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{plant.name}</h2>
          <p>Water {plant.waterFrequencyDescription.toLowerCase()}</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Water</button>
          </div>
        </div>
      </div>


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

export default TaskCard;
