import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementHandler = () => {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState - 1;
      });
    }, 2000);
  };

  const resetHandler = () => setCount(0);

  const incrementHandler = () => {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <section>
        <h1>{count}</h1>
        <button onClick={decrementHandler}>-</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={incrementHandler}>+</button>
      </section>
    </React.Fragment>
  );
};

export default Counter;
