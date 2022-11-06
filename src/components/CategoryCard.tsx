import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";

type CategoryProps = {
  image: string;
  name: string
  // paragraph: string
};

const PlantCard: React.FC<{ category: CategoryProps }> = ({ category }) => {
  return (
    <>
      <div className="card image-full w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={category.image} alt={category.name} width={80} height={100}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.name}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-end">
            {/* <button className="btn-primary btn">Buy Now</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantCard;
