import React from "react";

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
