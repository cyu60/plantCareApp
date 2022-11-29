import React from "react";
import { useState } from "react";

const CountDown: React.FC<{ lastWaterTime: Date }> = ({ lastWaterTime }) => {
  const [date, setDate] = useState(new Date());
  setInterval(() => setDate(new Date()), 1000)
  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": date.getDay() } as React.CSSProperties}></span>
          </span>
          days
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": date.getHours() } as React.CSSProperties}></span>
          </span>
          hours
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": date.getMinutes() } as React.CSSProperties}></span>
          </span>
          min
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": date.getSeconds() } as React.CSSProperties}></span>
          </span>
          sec
        </div>
      </div>
    </>
  );
};

export default CountDown;
