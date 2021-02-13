# Repaso Sábado

## [Repaso JSX](https://codesandbox.io/s/repaso-jsx-5et10)

1. Dudas en sintaxis entre JS y HTML.

- Añadir la extensión .jsx a los componentes facilitará entender que tipo de archivo y contenido tienen en proyectos grandes.
- Siempre que pintemos una variable en el JSX de React, usaremos {curlyBrackets}

2. Dudas en parentesco de componentes.

- Todo lo que devolvemos en un return debe estar ENVUELTO (wrapped) en un tag. Ya sea un div, o cualquier otro elemento que queramos.

```
function App() {
  // Dentro del return metemos el HTML
  return (
    <div>
      <h1>Welcome to The Bridge 🌉</h1>
      <p>Bienvenida Isabel! 🎉</p>
    </div>
  );
}
```

3. Dudas acerca de las keys.

- Las keys deben ser un valor único y NO repetido. El usar keys repetidas causará errores de rendimiento y rerender de listas.
- Usaremos el index como última instancia en caso de que no tengamos nada de contenido único para cada elemento.

---

## [Repaso States](https://codesandbox.io/s/repaso-states-inputs-ks0jk)

4. Dudas en relación setState/state, sobretodo arrays y objetos.

---

// AND (&&) => Obtiene true si TODOS los casos son true
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// OR (||) => Obtiene true si alguno de los casos son true
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

---

## [Repaso Effect](https://codesandbox.io/s/effect-dungeon-4wd4i)

5. Hacer fetch desde el render del componente.

- Cuando pintamos el componente por primera vez, se lanzan todos los efectos. Si tenemos un efecto que hace fetch, recuperamos datos para el primer pintado.

```
const [pokemon, setPokemon] = useState(null);

useEffect(() => {
  async function getPokemon() {
    try {
    const res = await fetch(URL)
    const pokemonData = await res.json()
    setPokemon(pokemonData)
    } catch (err) {
      console.log(err)
    }
  }

  getPokemon()
}, [])
```

6. ¿Cómo funciona el return de los useEffect y para qué?

## [Repaso Return Effects](https://codesandbox.io/s/event-listener-cleaners-c04sf)
