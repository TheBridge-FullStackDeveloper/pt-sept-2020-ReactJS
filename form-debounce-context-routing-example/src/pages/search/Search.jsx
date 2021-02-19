import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDebounce } from '../../hooks/index'
import Input from '../../components/input/Input'

const Search = () => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setValue(value)
  }

  useDebounce(value, 1500)

  return (
    <section>
      <Input handleChange={handleChange} value={value} />
      <Link to="/children">To Children</Link>
      <br />
      <Link to="/form">To Form</Link>
    </section>
  )
}

export default Search
