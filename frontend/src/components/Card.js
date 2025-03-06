import React from 'react';
import './card.css';

const Card = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onButtonClick} className="card-button">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;