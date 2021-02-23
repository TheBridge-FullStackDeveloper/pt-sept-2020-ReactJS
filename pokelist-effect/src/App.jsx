import { useState, Fragment, useEffect } from "react";
import "./App.css";
import Input from "./Input";
import Button from "./Button";
import { logoButton } from "./Components/Pictures";
import { POK_API } from "./Api";

export default function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const writeText = (event) => setText(event.target.value);

  const axios = require("axios").default;

  console.info(text);

  const [pokemons, setPokemons] = useState({
    name: "",
    id: "",
  });

  useEffect(() => {
    if (name) {
      axios
        .get(`${POK_API}${name}`)
        .then((res) => {
          console.log(res);
          console.log("res.data=>", res.data);

          // sin uso de momento el hook
          setPokemons({
            name: res.data.name,
            picture: res.data.sprites.front_default,
            id: res.data.id,
            type1: res.data.types[0].type.name,
          });
          setList([
            ...list, 
            {
              name: res.data.name,
              picture: res.data.sprites.front_default,
              id: res.data.id,
              type1: res.data.types[0].type.name,
            }
          ])
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [name]);

  function addList(event) {
    const newValue = event.target.value;
    const key = event.target.id;
    setPokemons({
      ...pokemons,
      [key]: newValue,
    });
    setList((list) => [...list, text]);
    setText("");

  }

 

  return (
    <div className="main">
      <section>
        <div className="input">
          <Input text={text} change={writeText}/>
        </div>

        <div className="button">
          <Button onClick={() => setName(text)} image={logoButton} />
        </div>
      </section>


      <section>
        <div className="list">
          <ul>
            {list.map((element, id) => {
              return (
                <li key={id}>
                  <p>{element.name}</p>
                  <Button onClick={() => setPokemons("")} text="Tu Pokemon" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
