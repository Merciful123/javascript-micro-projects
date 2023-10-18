import React from "react";
import Product from "./Product";

const Catalog = () => {
  return (
    <div className="catalog">
      <h1>Catalog</h1>
      <button className="department-filters" onClick={() => {}}>
        Electronics
      </button>
      <button className="department-filters clear-btn" onClick={() => {}}>
        Clear Filter
      </button>
      <div className="product-units">
        <Product
          product="Fancy Robotic Sushi Maker"
          cost={200}
          department="Electronics"
        />
      </div>
    </div>
  );
};

export default Catalog;
