import React, { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';

function Countries() {
    const [countries, setCountries] = useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setCountries(data)
    })
  }, []);

    return (
        <div className='country-app'>  
        
                <Filter />  
        <div className="wrapper">
        <div className="cards_wrap">
        {countries.map((country)=>{
                return(
                        <div className="card_item">

                            <div className="card_inner">
                                <img src={country.coatOfArms.svg} alt="coat of arms"/>
                                <div className="role_name">{country.name.common}</div>
                                <div className="real_name">Continent : {country.continents}</div>
                                <p className='film'>Capital : {country.capital}</p>
                                <p className='film'>Timezones : {country.timezones}</p>
                                <p className='films'>Region : {country.region}</p>

                                {/* <Modal name={product.name} description={product.description} /> */}
                                <Link to='./country'>
                                <button>Details</button>
                                </Link>
                                 </div>
                             
{/* 
                            <div className="card_back">
                                <h2>{country.name.official}</h2>
                                <p>Population : {country.population}</p>
                                <p>{country.borders}</p>
                                <p>Car : {country.car.side}</p>
                                <p>{country.flag} </p>
                                <p>{country.fifa}</p>
                            </div>
                             */}

                               
                        </div>



                )
            })}

           

                        
</div>
                    </div>   
        </div>

        
    );
  }
  
  export default Countries;
  