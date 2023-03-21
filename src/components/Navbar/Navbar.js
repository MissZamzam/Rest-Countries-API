import React,{useState,useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {

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


  return (
    <nav>
        <ul>
            <li><a href=''>All Countries</a></li>
            <li className="search">
                <form>
                    <input type="text" placeholder='search country...' value={searchValue} onChange={handleSearch} />

                    {/* <button type='submit'>Search</button> */}
                </form>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
