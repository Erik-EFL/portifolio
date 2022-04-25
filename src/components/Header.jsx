import React from 'react';
import { Link } from 'react-router-dom';
import '../public/CssReset.css';
import '../public/Header.css';

export default function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/" className='link_logo'><h1>EFL.</h1></Link>
        <nav className='nav_header'>
          <Link to="/" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/skills" className='link'>Skills</Link>
          <Link to="/projects" className='link'>Projects</Link>
        </nav>
      </header>
    </div>
  );
}
