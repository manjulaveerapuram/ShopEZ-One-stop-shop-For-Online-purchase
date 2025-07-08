jsx
import React from "react";
import { products } from "../mobile/books";

const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Products;






