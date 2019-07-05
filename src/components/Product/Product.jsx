import React from "react";

const Product = ({ title, size, imageUrl }) => {
  return (
    <div className={`${size} product`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="product__content">
        <h1 className="product__title">{title.toUpperCase()}</h1>
        <span className="product__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default Product;
