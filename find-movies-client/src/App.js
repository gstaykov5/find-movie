import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/navbar/Navbar';
import Favorites from './components/pages/home/favorites/Favorites';
import Search from './components/pages/search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Favorites /> */}
      <Search />
    </div>
  );
}

export default App;
