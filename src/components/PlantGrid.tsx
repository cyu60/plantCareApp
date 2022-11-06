import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";
import Link from "next/link";

// type CardProps = {
//   plant: Plant;
//   // paragraph: string
// };

const PlantGrid: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {children}
      </div>
    </>
  );
};

export default PlantGrid;
