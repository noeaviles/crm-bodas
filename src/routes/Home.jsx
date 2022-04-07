import React, { useState } from 'react';
import Hero from '../components/hero'
import Login from '../components/Login'
import { NavLink} from 'react-router-dom';
import Modal from '../components/modal'
const Home = () => {

  const [menuMobile, setMenuMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='wrapper_body'>
      <nav className='wrapper_body-menu'>
        <div className='wrapper_body-menu-mobile' onClick={ () => setMenuMobile(true) }>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className='wrapper_body-logo'>
          LOGO
        </div>
        <div className={`wrapper_body-menu-desk ${ menuMobile && 'open-menu-mobile' }`}>
          <div className="open-menu-mobile-x" onClick={ () => setMenuMobile(false) }>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul>
            <li>Home</li>
            <li>Locaciones</li>
            <li>Proveedores</li>
            <li>Nosotros</li>
          </ul>  
        </div>
        <div className='wrapper_body-login' onClick={ () => setShowModal(true) }>
          <i className="fa-regular fa-user"></i>
        </div>
      </nav>
      <Hero />
      { showModal && (
        <Modal showModal={ setShowModal } clase='login'>
          <Login />
        </Modal>
      )}
    </div>
  );
}

export default Home;
