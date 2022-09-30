import React from "react";
import Data from "../Data";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      {" "}
      <h1>Feature Products</h1>
      <div className="products">
        {Data.products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name}></img>
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                {" "}
                <strong>₹{product.price}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
