import React, { useState } from "react";
import { data } from "./ArrayData";

const ArrayPractice = () => {
  const [people, setPeople] = useState(data);

  const clearItemsHandler = () => setPeople([]);

  const deleteHandler = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <span key={id}>
            <h4>{name}</h4>
            <button onClick={() => deleteHandler(id)}>Delete Item</button>
          </span>
        );
      })}
      <button onClick={clearItemsHandler}>Clear Items</button>
    </React.Fragment>
  );
};

export default ArrayPractice;
