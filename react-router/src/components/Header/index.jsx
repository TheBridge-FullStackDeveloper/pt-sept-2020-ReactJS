import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">The Bridge Router ⚛️</h1>

      <nav className="nav">
        <a href="https://google.es" target="_blank" rel="noopener noreferrer">
          Ir a Google
        </a>

        {/* Los Links de react-router-dom van a cambiar la ruta SIN recargar la web */}
        <Link to="/">Ir a Home</Link>
        <Link to="/pokemon">Ir a Pokemon</Link>
      </nav>
    </header>
  );
}

export default Header;
