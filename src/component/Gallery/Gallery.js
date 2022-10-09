import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallerydetails from '../Gallerydetails/Gallerydetails';
import './Gallery.css'

const Gallery = () => {
  const pics = useLoaderData();
  let pictures = pics.meals
  console.log(pictures)
  return (
    <div className='gallery'>
      {
        pictures.map(pic => <Gallerydetails key={pic.idMeal} pic={pic} ></Gallerydetails>)
      }
    </div>
  );
};

export default Gallery;