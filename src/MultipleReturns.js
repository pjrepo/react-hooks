import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState("default user");

  const getUsers = async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const user = await response.json();
      const { login } = user;
      setUser(login);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsError(true);
      throw new Error(response.statusText);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>An error occurred</h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div>
        <h1>{user}</h1>
      </div>
    </React.Fragment>
  );
};

export default MultipleReturns;
