import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";

const TaskCard: React.FC<{ plant: Plant }> = ({ plant }) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl space-y-4 min-w-full">
        <figure className="object-cover">
          <Image src={plant.image} alt={plant.name} width={100} height={1000} className="object-cover h-full"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{plant.name}</h2>
          <p>Water {plant.waterFrequencyDescription.toLowerCase()}</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Water</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default TaskCard;
