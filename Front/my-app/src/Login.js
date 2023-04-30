import React, { useState } from "react";
import axios from "axios";
import ProductSearch from "./ProductsSearch";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        username,
        password,
      });

      const token = response.data.token;

      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {token ? (
        <ProductSearch token={token} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default Login;
