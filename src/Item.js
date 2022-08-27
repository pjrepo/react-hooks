import React, { useState, useEffect } from "react";

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => setSize(window.innerWidth);

  //   const clean = () => window.removeEventListener("resize", checkSize);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <React.Fragment>
      <h1>Window</h1>
      <h2>Size:{size} px</h2>
    </React.Fragment>
  );
};

export default Item;
