import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App">
            <Header />

     <Routes>
      <Route path="/" element={ <Countries/> } />
      <Route path='/filter' element={<Filter />}/>
     </Routes>
    </div>
  );
}

export default App;
