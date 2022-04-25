import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function About() {
  return (
    <div>
      <Header />
      About
      <nav className='social_media'>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Git Hub
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </nav>
      <Footer />
    </div>
  );
}
