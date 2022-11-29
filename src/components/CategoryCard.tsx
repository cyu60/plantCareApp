import React from "react";
import Image from "next/image";

type CategoryProps = {
  image: string;
  name: string
  // paragraph: string
};

const PlantCard: React.FC<{ category: CategoryProps }> = ({ category }) => {
  return (
    <>
      <div className="card image-full bg-base-100 shadow-xl">
        <figure>
          <Image src={category.image} alt={category.name} width={80} height={100}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.name + " Plants"} </h2>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantCard;
