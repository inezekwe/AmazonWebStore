import React, { useContext } from "react";
import "../../Components/Products/Products.css";
import axios from "axios"



function Products({ id, title, image, price, rating }) {

const allInventory = () => {
        axios.get('http://localhost:4000/inventory')
            .then(res => {
                console.log(res.data);
            })
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
      <button>Add to Cart</button>
    </div>
  );
}

export default Products;
