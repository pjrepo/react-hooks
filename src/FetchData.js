import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <h1>User Data</h1>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h2>{login}</h2>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default FetchData;
