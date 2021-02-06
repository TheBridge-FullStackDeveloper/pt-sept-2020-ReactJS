import { useState } from 'react'

import Display from './Display'
import Button from './Button'
import Input from './Input'
import Label from './Label'

function App() {
  const [value, setValue] = useState(0)
  const [text, setText] = useState('')

  const handleClick = unit => setValue(value + unit)
  const handleChange = event => setText(event.target.value)

  return (
    <section>
      <div className="container">
        <Button onClick={() => handleClick(-1)} text="SUB" />
        <Display value={value} />
        <Button onClick={() => handleClick(1)} text="ADD" />
      </div>

      <div className="container">
        <Input value={text} onChange={handleChange} />
      </div>

      <div className="container">
        <Label text={text} />
      </div>
    </section>
  )
}

export default App
