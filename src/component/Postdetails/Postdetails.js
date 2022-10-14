import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Postdetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <div className='flex justify-center'>
        <div className='mx-12 w-1/3'>
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-6xl p-2 pl-0 text-rose-400">{post.title}</h2>
              <p className='text-4xl text-amber-600 pt-5'>{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Postdetails;