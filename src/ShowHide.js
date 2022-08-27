import React, { useState } from "react";
import Item from "./Item";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const toggleHandler = () => setShow(!show);
  return (
    <React.Fragment>
      <button onClick={toggleHandler}>Show/Hide</button>
      {show && <Item />}
    </React.Fragment>
  );
};

export default ShowHide;
