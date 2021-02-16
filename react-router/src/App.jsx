import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import PokemonProfile from './pages/PokemonProfile';

import './App.css';

function App() {
  // Para persistir los pokemon entre rutas, necesito subir el state a mi App
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div className="App">
      <Header />

      {/* El switch es quien habla con la URL del navegador y decide a quien pintar */}
      <Switch>
        <Route path="/pokemon" exact>
          <Pokemon pokemonList={pokemonList} setPokemonList={setPokemonList} />
        </Route>

        <Route path="/pokemon/:name" exact>
          <PokemonProfile />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
