import React, { useState, useEffect } from "react";

const UseEffectPractice = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) document.title = `New Message(${value})`;
  }, [value]);

  console.log("render component");

  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click
      </button>
    </React.Fragment>
  );
};

export default UseEffectPractice;
