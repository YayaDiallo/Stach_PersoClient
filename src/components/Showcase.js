import React from 'react';
import './Showcase.css';

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='container grid'>
        <div className='showcase-text'>
          <h1>Réservation simple</h1>
          <p>
            Trouver un salon de coiffure proche de chez vous en moins de deux
            minutes. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus distinctio earum quidem laudantium.
          </p>
        </div>

        <div className='showcase-form card'>
          <h2>Réservez votre prestation</h2>
          <form>
            <div className='form-control'>
              <input
                type='text'
                name='name'
                placeholder='Saisir une adresse'
                required
              />
            </div>
            <div className='form-control'>
              <input
                type='text'
                name='company'
                placeholder='Toutes les dates'
                required
              />
            </div>
            <div className='form-control'>
              <input
                type='email'
                name='email'
                placeholder='Toutes les heures'
                required
              />
            </div>
            <div className='form-control'>
              <select name='pets' id='pet-select'>
                <option value=''>Toutes les prestations</option>
                <option value='dog'>Dog</option>
                <option value='cat'>Cat</option>
                <option value='hamster'>Hamster</option>
                <option value='parrot'>Parrot</option>
                <option value='spider'>Spider</option>
                <option value='goldfish'>Goldfish</option>
              </select>
            </div>
            <input type='submit' value='Valider' className='btn btn-primary' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
