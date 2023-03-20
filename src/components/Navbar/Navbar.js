import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
       <nav>
        <div class="brand">
            <h3>MyBrand</h3>
        </div>
        <div class="navigation">
            {/* <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
            <div class="search">
                <div class="search-content">
                    <button class="search-button"><i class="fa fa-search"></i></button>
                    <input type="text" class="search-input" placeholder="Search here..." />
                </div>
            </div>
        </div>
    </nav>
    <div class="banner">
        <img src="https://i.imgur.com/XNwuthr.jpg" alt="banner_image" />
    </div>
    </div>
  )
}

export default Navbar
