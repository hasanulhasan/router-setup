import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const frnd = useLoaderData();
  return (
    <div>
      <h3>Name: {frnd.name}</h3>
      <h3>Id: {frnd.id}</h3>
      <p>You can find him on phone. Call him {frnd.phone}</p>
    </div>
  );
};

export default FriendDetails;