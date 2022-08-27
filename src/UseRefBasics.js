import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const clickHandler = (event) => {
    event.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current.value);
    refContainer.current.focus();
  });

  return (
    <React.Fragment>
      <form>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit" onClick={clickHandler}>
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UseRefBasics;
