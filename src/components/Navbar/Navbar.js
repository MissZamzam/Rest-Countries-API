import React,{useState,useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {

    const [searchValue, setSearchValue] = useState('');
    const [searchContinent, setSearchContinent] = useState('');



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




  const handleSearchContinent = (event) => {
    const { value } = event.target;
    setSearchContinent(value.toLowerCase());
  };
  // search
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
  return (
    <nav>
        <ul>
            <li><a href=''>All Countries</a></li>
            <li className="search">
                <form>
                    <input type="text" placeholder='search country...' value={searchValue} onChange={handleSearch} />
                    <input type="text" placeholder='search continent...' value={searchContinent} onChange={handleSearchContinent} />

                    {/* <button type='submit'>Search</button> */}
                </form>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
