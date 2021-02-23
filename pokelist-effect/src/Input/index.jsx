import './Styles.css'

export default function Input(props) {
    const { text, change} = props
    return (
      <input value={text} onChange={change} placeholder="pokemon..."/>
    )
  }