import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { AddToCartButton } from "./button/Button";
import "./Product.css";
const Product = ({ title, price, rating, image }) => {
  const [value, setValue] = useState(rating);

  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <img src={image} alt="" className="product__image" />
        <AddToCartButton>Add to cart</AddToCartButton>
      </div>
    </>
  );
};

export default Product;
