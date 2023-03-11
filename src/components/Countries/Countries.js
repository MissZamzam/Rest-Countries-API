import React from 'react';
import './Countries.css'
import { useEffect } from 'react';

function Countries() {

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
    })
})

    return (
      <div className="app">
      <h1>countries</h1>
  
  <div class="wrapper">
      <div className="header">Avengers Responsive Cards UI Design</div>
  
      <div className="cards_wrap">
          <div className="card_item">
              <div classNaae="card_inner">
                  <img src="doctor_strange.png" />
                  <div class="role_name">Doctor Strange</div>
                  <div class="real_name">Benedict Cumberbatch</div>
                  <div class="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt aliqua.</div>
              </div>
          </div>
      </div>
  </div>  
      </div>
    );
  }
  
  export default Countries;
  