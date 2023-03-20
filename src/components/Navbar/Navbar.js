
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
         <ul>
            <li class="logo">CodingNepal</li>
            <li class="btn"><span class="fas fa-bars"></span></li>
            <div class="items">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Contact</a></li>
            </div>
            <li class="search-icon">
               <input type="search" placeholder="Search" />
               <label class="icon">
               <span class="fas fa-search"></span>
               </label>
            </li>
         </ul>
      </nav>
      <div class="content">
         <div class="text">
            Responsive Navbar with Searchbox
         </div>
         <div class="p">
            HTML and CSS (Flexbox) Full video tutorial
         </div>
      </div>
   

    </div>
  )
}

export default Navbar


