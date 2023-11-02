import React, { FC, ReactNode } from "react";

// Define the component's prop types
interface MyComponentProps {
  prop1: string;
  prop2: number;
  children: ReactNode;
}

// Create a functional component
const GoldForm: FC<MyComponentProps> = ({ prop1, prop2, children }) => {
  return (
    <div>
      <h2>{prop1}</h2>
      <p>{prop2}</p>
      {children}
    </div>
  );
};

export default GoldForm;
