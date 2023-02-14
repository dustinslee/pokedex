import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Pokemons, Pokemon } from './pages';

export default function App(props) {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {/* <li>
            <NavLink to="Pokemon">Pokemons</NavLink>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        {/* <Route path="pokemon" element={<Pokemon />} /> */}
      </Routes>
    </BrowserRouter>
  );
}