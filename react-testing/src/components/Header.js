import { useState } from 'react';

const headerElements = ['Home', 'Courses', 'Contact', 'About'];

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header data-testid="header">
      <h2>Header title</h2>

      <ul data-testid="list">
        {headerElements.map((element) => {
          return (
            <li data-testid="item" key={element}>
              {element}
            </li>
          );
        })}
      </ul>

      <img
        alt="logo"
        width="200"
        height="200"
        src="https://thebridge.tech/blog/wp-content/uploads/2020/10/logo-the-bridge-01.png"
      />

      <button
        data-testid="toggle-button"
        className="toggle-button"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle {isDarkMode ? 'light' : 'dark'} mode
      </button>
      <span data-testid="theme-text">
        {isDarkMode ? 'Using dark theme' : 'Using light theme'}
      </span>
    </header>
  );
}

export default Header;
