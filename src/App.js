import Countries from './components/Countries/Countries';
import Header from './components/Header';
import Modal from './components/Modal/Modal';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
            <Header />

      <Routes>
      <Route path="/" element={ <Countries/> } />
      <Route path='/pop' element={<Modal />}/>
      </Routes>
    </div>
  );
}

export default App;
