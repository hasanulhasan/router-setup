import React from 'react';

const Gallerydetails = ({ pic }) => {
  const { idMeal, strMealThumb, strMeal, strInstructions } = pic;
  return (
    <div className='mx-auto'>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={strMealThumb} alt="Album" height='320px' width='420px' /></figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p>Instrucions : {`${strInstructions.slice(0, 500)}...`}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerydetails;