import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-4xl">MicroShop</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-4xl">
            <li><NavLink className={pathname === '/' ? 'Isactive' : undefined} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'Isactive' : undefined} to='/about'>Log </NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'Isactive' : undefined} to='/products'>Products</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'Isactive' : undefined} to='/friends'>Friends</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'Isactive' : undefined} to='/posts'>Posts</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'Isactive' : undefined} to='/gallery'>Gallery</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'Isactive' : undefined} to='/login'>Log in</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;