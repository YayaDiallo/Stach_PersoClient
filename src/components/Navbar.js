import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Global Inline Styling in react-icons */}
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='container flex'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={() => showSidebar()} />
            </Link>
            <h1 className='logo'>'Stach</h1>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items'>
                <li className='nabar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose onClick={() => showSidebar()} />
                  </Link>
                </li>
                <li className='nav-text'>
                  <AiIcons.AiFillHome className='icon' />
                  <Link to='/'>Accueil</Link>
                </li>
                {/* <li className='nav-text'>
                  <FaIcons.FaUserAlt className='icon' />
                  <Link to='/profile'>Mes rendez-vous</Link>
                </li>
                <li className='nav-text'>
                  <AiIcons.AiFillHeart className='icon' />
                  <Link to='/favorites'>Mes favoris</Link>
                </li> */}
                <li className='nav-text'>
                  <RiIcons.RiLoginCircleFill className='icon' />
                  <Link to='/signIn'>Se connecter</Link>
                </li>
                <li className='nav-text'>
                  <FaIcons.FaUserPlus className='icon' />
                  <Link to='/signUp'>S'inscrire</Link>
                </li>
                {/* <li className='nav-text'>
                  <RiIcons.RiLoginCircleFill className='icon' />
                  <Link to='/logout'>Se déconnecter</Link>
                </li> */}
                <li className='nav-text'>
                  <FaIcons.FaEnvelope className='icon' />
                  <Link to='/contactUs'>Contactez-nous</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
