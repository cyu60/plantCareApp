import React from "react";

const Title: React.FC<{ children: string }> = ({ children }) => {
  return <h1 className="pt-10 text-6xl lg:text-9xl">{children}</h1>;
};

export default Title;
