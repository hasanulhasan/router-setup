import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-4xl">MicroShop</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-4xl">
            <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to='/friends'>Friends</NavLink></li>
            <li><NavLink to='/posts'>Posts</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;