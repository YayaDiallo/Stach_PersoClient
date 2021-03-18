import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer bg-dark py-5'>
      <div className='container grid grid-3'>
        <div>
          <h1>'Stach</h1>
          <p>Copyright &copy; 2021</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/contactUs'>Contactez-nous</Link>
            </li>
            <li>
              <Link to='/'>Mentions légales</Link>
            </li>
          </ul>
        </nav>
        <div className='social'>
          <Link to='/'>
            <FaIcons.FaGithub size={32} />
          </Link>
          <Link to='/'>
            <FaIcons.FaFacebook size={32} />
          </Link>
          <Link to='/'>
            <FiIcons.FiInstagram size={32} />
          </Link>
          <Link to='/'>
            <FaIcons.FaTwitter size={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
