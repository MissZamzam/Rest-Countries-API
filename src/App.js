import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter/Filter';
import Country from './components/Country/Country';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
            {/* <Header /> */}
            <Navbar />

     <Routes>
      <Route path="/" element={ <Countries/> } />
      {/* <Route path='/filter' element={<Filter />}/> */}
      <Route path='/country' element={<Country />}/>
     </Routes>
    </div>
  );
}

export default App;
