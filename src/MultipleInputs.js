import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const personChangeHandler = (event) => {
    const name = event.target.name;
    const email = event.target.email;
    const age = event.target.age;
    setPerson({ ...person });
  };

  const clickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <article>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              name="name"
              value={person.name}
              onChange={personChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Enter Your Email ID"
              id="email"
              name="email"
              value={person.email}
              onChange={personChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Email:</label>
            <input
              type="text"
              placeholder="Enter Your Age"
              id="age"
              name="age"
              value={person.age}
              onChange={personChangeHandler}
            />
          </div>
          <button type="submit" onClick={clickHandler}>
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, name, email, age } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default MultipleInputs;
