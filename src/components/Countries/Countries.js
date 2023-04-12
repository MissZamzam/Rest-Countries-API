import React, { useState, useEffect } from "react";
import "./Countries.css";
// 
function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);

  return (
    <div className="country-app">
    
      <div className="cards_wrap">
        {countries.map((country) => {
          const { name,capital, continents, maps,population, car,coatOfArms,fifa,timezones, flags } = country;

          return (
            <div className="card_item">
              <div className="card_inner">
              <img src={flags.svg} alt="flags" />

                <div className="role_name">{name.common}</div>
                <div className="real_name">Continent : {continents}</div>
                <p className="real_capital">Capital : {capital}</p>
                <p className="real_capital"><a href={maps.googleMaps}>View map</a></p>

                <h1 className="film film-details">Timezones : {timezones}</h1>
                <p className="film1 film-details">population : {population}</p>
                <p className="film2 film-details">Fifa : {fifa}</p>
                <p className="film3 film-details">Car : {car.side}</p>





              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
