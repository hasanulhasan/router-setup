import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className='products'>
      {
        products.map(product => <Product
          key={product.id}
          product={product}
        ></Product>)
      }
    </div>
  );
};

export default Products;