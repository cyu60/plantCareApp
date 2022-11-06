import React from "react";
import Image from "next/image";
import { Plant } from "../types/plant";

// type CardProps = {
//   plant: Plant;
//   // paragraph: string
// };

const CountDown: React.FC<{ time: any }> = ({ time }) => {
  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 } as React.CSSProperties}></span>
          </span>
          days
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 10 } as React.CSSProperties}></span>
          </span>
          hours
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 24 } as React.CSSProperties}></span>
          </span>
          min
        </div>
        {/* <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 56 }}></span>
          </span>
          sec
        </div> */}
      </div>
    </>
  );
};

export default CountDown;
