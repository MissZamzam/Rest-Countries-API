import React, { useState, useEffect } from 'react';
import './Filter.css'


const Filter = () => {
  const [searchValue, setSearchValue] = useState('');
  

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value.toLowerCase());
  };
// search
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

// const filterRegions = async (region)=> {
//   const url = 'https://restcountries.com/v3.1/all'
// }

// const url = "https://restcountries.eu/rest/v2/all"


  return (
  <section className='filter'>
    <form className='form-control'>
      <input id="search" type="text" value={searchValue} onChange={handleSearch} 
        placeholder='Search for a country' />
    </form>
    <div className='region-filter'>
        <select name='select' id='select' className='select'>
            <option value='filter by region'>Filter by region</option>
            <option value='Africa'>Africa</option>
            <option value='America'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>
    </div>
  </section>
  )
}

export default Filter
