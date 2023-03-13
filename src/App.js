import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter/Filter';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
            <Header />

      <Routes>
      <Route path="/" element={ <Countries/> } />
      <Route path='/filter' element={<Filter />}/>
      <Route path='/pop' element={<Modal />}/>
      <Route path='/country' element={<Country />}/>

      </Routes>
    </div>
  );
}

export default App;
