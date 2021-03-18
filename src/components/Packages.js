import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';
import { PackagesData } from './PackagesData';

const Packages = () => {
  return (
    <section className='languages'>
      <h2 className='md text-center my-2'>Pack expériences</h2>
      <div className='container flex'>
        {PackagesData.map((item, index) => (
          <div key={index} className='card'>
            <img src={item.url} alt='' />
            <div className='card-body'>
              <h2 className='card-title'>{item.title}</h2>
              <p className='card-description'>
                {item.description.substring(0, 50)}...
              </p>
              <Link to='/' className='btn btn-primary my-1'>
                Choisir ce pack
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
