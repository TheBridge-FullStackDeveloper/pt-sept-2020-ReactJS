import { useContext } from 'react'
import { Store } from '../../store'

const Watch = () => {
  const { watch, handleClick } = useContext(Store)
  return (
    <section>
      <label>{watch}</label>
      <button onClick={handleClick}>Add random number</button>
    </section>
  )
}

export default Watch
