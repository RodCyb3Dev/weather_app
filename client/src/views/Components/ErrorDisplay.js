import React from 'react';
import LightningBolt from '../assets/lightning.svg';

const Home = () => {

  return (
    <div>
      <div className='header'>
        <h2>Weather Forcast</h2>
        <img src={LightningBolt} alt={ this.props.alt }/>
      </div>
      <div className="instructions">
        <p>Enter a City cipcode or name below to see the current weather forcast.</p>
      </div>
      <div className='zipcodeInput'>
        <form method='POST' action='/search-location'>
          <input type='text' placeholder='Enter city name..' name='name'/>
          <button>Get forcast</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
