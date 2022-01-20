import React, { useContext } from "react";
import MainContext from "../contexts/mainContexts";

// Components
import Product from "./Product";

const Products = () => {
  const products = useContext(MainContext);
  return (
    <div className="products-container">
      {products.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addItem={products.addItem}
        />
      ))}
    </div>
  );
};

export default Products;
