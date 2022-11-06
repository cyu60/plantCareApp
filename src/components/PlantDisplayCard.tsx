import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";
import { getDisplayCategory } from "../utils/helper";


type PlantDisplayProps = {
  image: string;
  name: string;
  category: string;
  // paragraph: string
};

const PlantCard: React.FC<{ plant: PlantDisplayProps }> = ({ plant }) => {
  return (
    <>
      <div className="card-compact card w-max bg-base-100 shadow-xl min-w-full">
        <figure>
          <Image
            className="h-48 w-full object-cover"
            src={plant.image}
            alt={plant.name}
            width={80}
            height={100}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{plant.name}</h2>
          <div className="badge-secondary badge">{plant.category}</div>

          {/* <p>{plant.description}</p> */}
          <div className="card-actions justify-end">
            {/* <button className="btn-primary btn">Delete</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantCard;
