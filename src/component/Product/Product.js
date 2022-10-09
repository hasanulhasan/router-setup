import React from 'react';
import './Product.css'

const Product = ({ product }) => {
  const { name, title, price, image, id, description } = product;
  return (
    <div className='mx-auto'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{id}: {title}</h2>
          <p>{`${description.slice(0, 100)}...`}</p>
          <p className='text-2xl text-slate-100'>Price: {price}</p>
          <div className="card-actions justify-end">
            <button for="my-modal" class="btn btn-primary modal-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;