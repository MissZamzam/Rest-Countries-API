import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Country.css';

const Country = () => {
  const location = useLocation();
  const { name, capital, continent, flag } = location.state || {};

  return (
    <div className="container">
      <Link to="/">
        <a href="#" className="back-link"><i className="fas fa-arrow-left"></i> Back</a>
      </Link>
      <div className="image">
        <img src={flag} alt="flag" />
      </div>
      <div className="text">
        <p>Name: {name}</p>
        <p>Capital: {capital}</p>
        <p>Continent: {continent}</p>
      </div>
    </div>
  );
};

export default Country;
