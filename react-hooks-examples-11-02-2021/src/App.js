import { useState, useEffect } from 'react'
import './App.css'

const isOne = s => s.toString().length === 1 ? `0${s}` : s

const formatTime = (...args) =>
    args.reduce((acc, curr) => `${acc}${acc && ':'}${isOne(curr)}`, '')

const getTime = () => {
  const d = new Date()
  const h = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()
  return formatTime(h, m, s)
}

let id = null

export const App = () => {
  const [time, setTime] = useState(getTime())
  const [light, setLight] = useState(false)
  const [buttonState, setButtonState] = useState(false)

  useEffect(() => {
    id = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    console.info('> Botón a: ', buttonState)
    setLight(currentLight => !currentLight)
  }, [buttonState])

  const handleClick = () => setButtonState(currentState => !currentState)

  return (
    <section>
      <section className="container">
        <label>{time}</label>
      </section>

      <section className="container">
        <div className={`bulb ${light ? 'on' : ''}`}></div>
        <button onClick={handleClick}>{buttonState ? 'ON' : 'OFF'}</button>
      </section>
    </section>
  )
}
