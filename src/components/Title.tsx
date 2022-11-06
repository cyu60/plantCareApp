import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";
import Link from "next/link";

// type CardProps = {
//   plant: Plant;
//   // paragraph: string
// };

const Title: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <h1 className="text-9xl pt-10">
        {children}
      </h1>
    </>
  );
};

export default Title;
