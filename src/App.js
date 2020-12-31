import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import Favourites from './Components/Favourites'


function NavBar() {
  return (
    <div className='navBar'>
      <span>
      <span className='menu-link'>
        <Link to='/'> Home </Link>
      </span>
      <span className='menu-link'>
        <Link to='/search'> Search </Link>
      </span>
      <span className='menu-link'>
        <Link to='/favourites'> Favourites </Link>
      </span>
      </span>
    </div>
  )

}

function App() {

  return (
    <Router>
      <div className="App">
        {NavBar()}
      <div>
        <img className='nasa-logo' src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' ></img>
      </div>
        <Route path='/' exact render={({ match }) => <Home />} />
        <Route path='/search' exact render={({ match }) => <Search />} />
        <Route path='/favourites' exact render={({ match }) => <Favourites />} />
      </div>
    </Router>
  );
}

export default App;
