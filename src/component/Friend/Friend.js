import React from 'react';
import './Friend.css'

const Friend = ({ friend }) => {
  const { name, email, username } = friend;
  return (
    <div className='friend'>
      <h3>UserName: {username}</h3>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default Friend;