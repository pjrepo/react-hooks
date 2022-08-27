import React, { useState } from "react";

const ObjectPractice = () => {
  const [person, setPerson] = useState({
    name: "pavan",
    age: 23,
    message: "random message",
  });

  const messageHandler = () => {
    setPerson({ ...person, message: "Hello World!" });
  };

  return (
    <React.Fragment>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.message}</h3>
      <button onClick={messageHandler}>Change Message</button>
    </React.Fragment>
  );
};

export default ObjectPractice;
