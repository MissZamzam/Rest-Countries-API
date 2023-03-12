import Countries from './components/Countries/Countries';
import Header from './components/Header';
import Popup from './components/Popup/Popup';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
            <Header />

      <Routes>
      <Route path="/" element={ <Countries/> } />
        <Route path='/pop' element={<Popup />}/>
      </Routes>
    </div>
  );
}

export default App;
