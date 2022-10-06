import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
  const { title, body, id } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${id}`)
  }
  return (
    <div className='post'>
      <h3>{id}- {title}</h3>
      <p>{body}</p>
      <button onClick={handleNavigate}>Show details</button>
    </div>
  );
};

export default Post;