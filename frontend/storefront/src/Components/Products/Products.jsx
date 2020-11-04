import React from "react";
import { useState } from "react";
import "../../Components/Products/Products.css";
import { useStateValue } from "../../StateManagement";

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    //add item to cart
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          
        </div>
      </div>

      <img src={image} alt="image" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;