import React from 'react'
// import { Link } from 'react-router-dom'
import './Country.css'

const Country = (props) => {
  const { name, capital } = props.location.state;

  return (
    
    <div class="container">
    <a href="#" class="back-link"><i class="fas fa-arrow-left"></i> Back</a>
    <div class="image">
      <img src="https://images.unsplash.com/photo-1679471228928-0741589a57fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Your Image" />
    </div>
    <div class="text">
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Your text content goes here</p>
      <p>Your text content goes here</p>
      <p>Your text content goes here</p>
      <p>Your text content goes here</p>
      <p>Your text content goes here</p>

      {/* <a href="#">Learn More</a> */}
    </div>
  </div>
  
  )
}

export default Country
