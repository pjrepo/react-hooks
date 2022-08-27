import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanUp");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log("render");

  return (
    <React.Fragment>
      <h1>window</h1>
      <h2>{size} px</h2>
    </React.Fragment>
  );
};

export default CleanUp;
