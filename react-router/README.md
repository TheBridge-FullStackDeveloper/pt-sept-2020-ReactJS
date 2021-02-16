# React Router

1. Para comenzar, instalaremos React Router DOM:

```
npm install react-router-dom
```

2. Inyectamos el BrowserRouter sobre nuestra App para que toda tenga acceso al router del navegador.

En el archivo `index.js` vamos a importarlo y escribirlo en `ReactDOM.render()`.

```
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```
