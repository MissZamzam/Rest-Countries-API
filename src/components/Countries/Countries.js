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
          const { name,capital, continents, flag, coatOfArms, currencies } = country;

          return (
            <div className="card_item">
              <div className="card_inner">
                <img src={coatOfArms.svg} alt="coat of arms" />
                <div className="role_name">name:{name.common}</div>
                <div className="real_name">Continent : {continents}</div>
                {/* <p className="film">Capital : {capital}</p> */}
                <h1 className="film film-details">Capital : {capital}</h1>
                <p className="film film-details">Flag : {flag}</p>
                {/* <p className="film film-details">Capital : {currencies.SRD.symbol}</p> */}
                <p className="film film-details">Capital : {capital}</p>
                <p className="film film-details">Capital : {capital}</p>


              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
