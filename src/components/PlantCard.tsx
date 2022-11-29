import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";
import { getDisplayCategory } from "../utils/helper";

const PlantCard: React.FC<{ plant: Plant }> = ({ plant }) => {
  return (
    <>
      <div className="card-compact card w-max min-w-full bg-base-100 shadow-xl">
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
          <div className="badge-secondary badge">
            {getDisplayCategory(plant.category)}
          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
};

export default PlantCard;
