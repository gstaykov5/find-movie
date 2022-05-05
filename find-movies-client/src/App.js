import './App.css';
import Navbar from './components/shared/navbar/Navbar';
import Favorites from './components/pages/home/favorites/Favorites';
import Search from './components/pages/search/Search';
import Details from './components/pages/details/Details';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Favorites />} />
        <Route path='/search' element={<Search />} />
        <Route path='/movies/:movieTitle' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
