import React from 'react';
import Hero from '../components/hero'

const Home = () => {
  return (
    <div className='wrapper_body'>
      <nav className='wrapper_body-menu'>
        <div>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div>LOGO</div>
        <div><i className="fa-regular fa-user"></i></div>
      </nav>
      <Hero />
    </div>
  );
}

export default Home;
