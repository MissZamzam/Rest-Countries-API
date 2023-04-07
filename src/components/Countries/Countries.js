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
          const { name,capital, continents, flag,population, car,coatOfArms,fifa,timezones, flags } = country;

          return (
            <div className="card_item">
              <div className="card_inner">
              <img src={flags.svg} alt="flags" />

                <div className="role_name">{name.common}</div>
                <div className="real_name">Continent : {continents}</div>
                <p className="real_capital">Capital : {capital}</p>
                {/* <img src={coatOfArms.svg} alt="coat of arms" /> */}
                <h1 className="film film-details">Timezones : {timezones}</h1>
                <p className="film film-details">population : {population}</p>
                <p className="film film-details">Fifa : {fifa}</p>
                <p className="film film-details">Car : {car.side}</p>





              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
