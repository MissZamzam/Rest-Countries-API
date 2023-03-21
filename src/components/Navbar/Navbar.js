import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><a href=''>Home</a></li>
            <li className="search">
                <form>
                    <input type="text" placeholder='search...'/>
                    <button type='submit'>Search</button>
                </form>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
