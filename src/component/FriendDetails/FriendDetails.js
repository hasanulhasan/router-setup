import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const frnd = useLoaderData();
  return (
    <div className='flex justify-center'>
      <div className='mx-12 w-1/2'>
        <div className="card card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl p-2 text-rose-400">Name: {frnd.name}</h2>
            <p className='text-2xl text-amber-600'>Phone: {frnd.phone}</p>
            <p className='text-2xl text-amber-600'>Website: {frnd.website}</p>
            <p className='text-2xl text-amber-600'>Address :
              {frnd.address.street},
              {frnd.address.suite},
              {frnd.address.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;