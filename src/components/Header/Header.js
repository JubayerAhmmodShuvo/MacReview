import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className=" bg-slate-100 p-6">
     

      <nav className="  text-xl space-x-8 font-medium  ">
       
        <Link to="/home">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;