import React from 'react';
import './Product.css'

const Product = ({ product }) => {
  const { name, title, price, image, id, description } = product;
  return (
    <div>
      {/* <h1>Id: {id} name: {title}</h1> */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{id}: {title}</h2>
          <p>{description}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;