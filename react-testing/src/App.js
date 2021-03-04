import './App.css';
import Header from './components/Header';

// Testearemos que tenemos un elemento que diga la palabra test
// Testearemos que TODOS los elementos que contengan The Bridge son visibles

function App() {
  return (
    <div className="App" data-testid="App">
      <h1>Welcome to The Bridge</h1>

      <section>
        <h3>Let's learn how to test!</h3>
        <a href="https://google.es" data-testid="google-link">
          Go to The Bridge
        </a>
      </section>

      <Header />

      
    </div>
  );
}

export default App;
