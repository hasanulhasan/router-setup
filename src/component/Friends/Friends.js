import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div>
      <h1>Your friend number is {friends.length}</h1>
    </div>
  );
};

export default Friends;