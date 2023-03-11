import React, { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';

function Countries() {

    const [countries, setCountries] = useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setCountries(data)
    })
})

    return (
        
        <div className="wrapper">
            <div className="header">Avengers Responsive Cards UI Design</div>
            {countries.map((country)=>{
                return(
        <div className="cards_wrap">
                        <div className="card_item">
                            <div className="card_inner">
                                <img src={country.coatOfArms.svg} />
                                <div className="role_name">{country.name.common}</div>
                                <div className="real_name">Benedict Cumberbatch</div>
                                <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt aliqua.</div>
                            </div>
                        </div>
                    </div>

                )
            })}

          

        </div>   
    );
  }
  
  export default Countries;
  