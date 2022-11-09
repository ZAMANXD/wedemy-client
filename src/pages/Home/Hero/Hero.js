import theFoodImage from '../../../assets/hero-img.jpg';
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="container">
      <div className="befr-hero">
        <div className="befr-bg">
          <img className=" befr-hero-img" src={theFoodImage} alt="" />
        </div>

        <div className="befr-capions w-75">
          <h2>THE FOOD</h2>
          <p>
            BEFRS is a team of hungry storytellers on a mission to hunt down and
            document the most unique cuisine from around the world, encouraging
            empathy, understanding and appreciation of different cultures
            through their food.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
