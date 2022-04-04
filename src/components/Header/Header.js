import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className=" p-6 bg-white	  mb-10 sticky top-0 ">
     

      <nav className="  text-xl space-x-8 font-medium  ">
       
        <NavLink className={({isActive}) => isActive ? 'text-orange-700':'text-black-700' } to="/home">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-orange-700':'text-black-700'  } to="/reviews">Reviews</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-orange-700':'text-black-700'  } to="/dashboard">Dashboard</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-orange-700':'text-black-700'  } to="/blog">Blog</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-orange-700':'text-black-700'  } to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Header;