import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductSearch({ token }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products", {
          headers: { Authorization: `Bearer ${token}` }, 
        });

        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [token]);

  return (
    <div>
      <h1>Product Search</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
