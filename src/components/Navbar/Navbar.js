

import React, {useState, useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {

  const [searchValue, setSearchValue] = useState('');
  const [searchContinent, setSearchContinent] = useState('');
  const [searchCity, setSearchCity] =useState("")


// country
  const handleSearch = (event) => {
      const { value } = event.target;
      setSearchValue(value.toLowerCase());
    };
useEffect(() => {
  const countryName = document.querySelectorAll('.role_name');

  countryName.forEach((name) => {
    if (name.innerText.toLowerCase().includes(searchValue)) {
      name.parentElement.parentElement.style.display = 'block';
    } else {
      name.parentElement.parentElement.style.display = 'none';
    }
  });
}, [searchValue]);



// continent
const handleSearchContinent = (event) => {
  const { value } = event.target;
  setSearchContinent(value.toLowerCase());
};
useEffect(() => {
const countinentName = document.querySelectorAll('.real_name');

countinentName.forEach((name) => {
if (name.innerText.toLowerCase().includes(searchContinent)) {
  name.parentElement.parentElement.style.display = 'block';
} else {
  name.parentElement.parentElement.style.display = 'none';
}
});
}, [searchContinent]);

// city

const handleSearchCity = (event) =>{
const {value} = event.target;
setSearchCity(value.toLowerCase())
}
useEffect(()=>{
const city = document.querySelectorAll('.real_capital');

city.forEach((name)=>{
  if(name.innerText.toLowerCase().includes(searchCity)){
    name.parentElement.parentElement.style.display = 'block'
  }else{
    name.parentElement.parentElement.style.display = 'none'
  }
})
},[searchCity])






  return (
    <div>
      <nav>
  <div className="logo">Countries</div>
  <div className="menu-toggle">
    <i className="fa fa-bars"></i>
  </div>

  <div className="search">
    <input type="text" placeholder='search country...' value={searchValue} onChange={handleSearch} />
    <input type="text" placeholder='search by continent...' value={searchContinent} onChange={handleSearchContinent} />
    <input type="text" placeholder='search by City...' value={searchCity} onChange={handleSearchCity} />

  </div>
</nav>

    </div>
  )
}

export default Navbar
