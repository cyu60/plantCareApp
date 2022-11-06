import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";
import Link from "next/link";

// type CardProps = {
//   plant: Plant;
//   // paragraph: string
// };

const PlantGrid: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 gap-4">
        {children}
      </div>
    </>
  );
};

export default PlantGrid;
