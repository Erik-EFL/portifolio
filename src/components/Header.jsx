import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from '../public/StyledComponents/HeaderStyled.jsx';

export default function Header() {
  return (
    <div>
      <HeaderStyled>
        <div className='link_logo'><h1>EFL.</h1></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </HeaderStyled>
    </div>
  );
}
