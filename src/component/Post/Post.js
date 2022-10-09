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
      <h3 className='text-2xl text-blue-500'>{id}- {title}</h3>
      <div className="card-actions justify-end">
        <button className="btn btn-success mt-3 justify-end " onClick={handleNavigate}>Show details</button>
      </div>
    </div>
  );
};

export default Post;