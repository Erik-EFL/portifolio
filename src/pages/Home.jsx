/* eslint-disable no-param-reassign */
import React from 'react';
import TypeAnimation from 'react-type-animation';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import erik from '../public/assets/erik2.png';
import '../public/Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <main>
        <div className='home-content'>
          <div className="info">
            <div className="circle_Container">
              <h3>
                <span>Sou</span>
                {' '}
                o Erik Ferreira de Lima
              </h3>
              <div className="circle2" />
            </div>
            <TypeAnimation
              cursor
              sequence={['Um Full Stack Developer', 1000000]}
              wrapper="h1"
            />
            <h2 className='info_City'>E moro em Guarulhos</h2>
          </div>
          <div className='img'>
            <div className="circle">
              <img src={erik} alt="imagem de Erik lima" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
