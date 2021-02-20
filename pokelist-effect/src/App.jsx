import { useState, Fragment } from "react";
import "./App.css";
import Input from './Input'
import Button from './Button'
import { logoButton } from './Components/Pictures';


export default function App ()  {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const writeText = (event) => setText(event.target.text);
  const pushButton = () => {
    setList((list) => [...list, text]);
    setText("");
  }
 

  const [pokemons, setPokemons] = useState({

   name: "",
   id: "",

  });  
      
  function addList(event) {
    const newValue = event.target.value;
    const key = event.target.id; 
    setPokemons({
      ...pokemons, 
      [key]: newValue
    });
  }



  return (
    <Fragment>
    <section>
      <div className="input">
        <Input text={text} change={writeText} 
        onChange={addList} />
        
        
          
      </div>

      <div className="button">
        <Button onClick={pushButton} image={logoButton}  /> 
      </div>
    </section>
    <section>

    <div className="list">
      <ul>
        {pokemons.map((pokemons, id) => {
          return 
            <li key={id}>
            <p>{pokemons.name}</p>
            </li>
        })}
      </ul>
    </div>
    </section>
    </Fragment>
  );

}




  

  




