import './Styles.css'

export default function Button(props) {
    const { onClick, image } = props
    return (
    
      <button onClick={onClick}><img src={image}/></button>
    )
  }