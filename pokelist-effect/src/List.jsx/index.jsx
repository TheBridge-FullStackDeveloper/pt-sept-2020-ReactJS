import './styles.css'

export default function Input(props) {
    const { pokemons, change} = props
    return (
      <p>
      <input value={pokemons} onChange={change} placeholder="list..."/>
      </p>
    )
  }


