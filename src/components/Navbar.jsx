import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <div>
    <nav className="navbar">
      
      
        <div className="nav-item"><li><Link to="/">Home</Link></li></div>
        <div className="nav-item"><li><Link to="/memories">Memories</Link></li></div>
        <div className="nav-item"><li><Link to="/wishes">Wishes</Link></li></div>
        <div className="nav-item"><li><Link to="/make-a-wish">Make a wish</Link></li></div>
{/*         
        <li><Link to="/memories">Memories</Link></li>
        <li><Link to="/wishes">Wishes</Link></li>
        <li><Link to="/make-a-wish">Make a Wish</Link></li> */}
     
    </nav>
    </div>
    </>
  );
};

export default Navbar;
