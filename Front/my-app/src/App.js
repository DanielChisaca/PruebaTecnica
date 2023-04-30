import React, { useState } from "react";
import Login from "./Login";
import ProductSearch from "./ProductsSearch";

function App() {
  const [token, setToken] = useState("");

  return (
    <div>
      {token ? (
        <ProductSearch token={token} />
      ) : (
        <Login onLogin={(token) => setToken(token)} />
      )}
    </div>
  );
}

export default App;
