import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;
  <div className="alert alert-success shadow-lg" >
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Your purchase has been confirmed!</span>
    </div>
  </div>

  return (
    <div className='mx-auto'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{username}</h2>
          <p className='text-2xl'>Name: {name}</p>
          <p className='text-2xl'>Email: {email}</p>
          <div className="card-actions justify-end">
            <button onClick={() => { alert('this is an alert') }} className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;