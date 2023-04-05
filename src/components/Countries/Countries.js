import React, { useState, useEffect } from "react";
import "./Countries.css";
import { Link } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  // const [showMessage, setShowMessage] =useState(false)

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
      {/* <button onClick={()=> setShowMessage(true)}>click me</button>
      {showMessage && <p>Thank you for visiting</p>} */}
      <div className="cards_wrap">
        {countries.map((country) => {
          const { capital, continents, coatOfArms } = country;

          return (
            <div className="card_item">
              <div className="card_inner">
                <img src={coatOfArms.svg} alt="coat of arms" />
                <div className="role_name">name:{country.name.common}</div>
                <div className="real_name">Continent : {continents}</div>
                <p className="film">Capital : {capital}</p>

                <Link
  // to={{
  //   pathname: '/country',
  //   state: {
  //     name: country.name.common,
  //     capital: country.capital[0],
  //     continent: country.continents,
  //     flag: country.flags.svg,
  //   },
  // }}
>
  {/* <button>Learn More</button> */}
</Link>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
