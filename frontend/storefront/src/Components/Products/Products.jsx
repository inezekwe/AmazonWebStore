import React from "react";
import { useState } from "react";
import "../../Components/Products/Products.css";


function Products({ id, title, image, price, rating }) {
  const [cart, addToCart] = useState([]);

  const handleClick = () => {
    addToCart([...cart, {id, title, price}]);
    console.log(cart);
  }

  return (
    <div className="products">
      <div className="products-info">
        <p>{title}</p>
        <p className="products-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="products-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <img
                  className="products-rating-stars"
                  src="https://pixy.org/src/426/4262587.jpeg"
                />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="image" />
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default Products;
