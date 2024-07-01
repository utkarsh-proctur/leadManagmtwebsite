import React from 'react';
import './ourCampus.css';

const Card = ({ title }) => {
  return (
    <div className='card-style'>
      <text className='card-title'>{title}</text>
    </div>
  );
};

export default Card;
