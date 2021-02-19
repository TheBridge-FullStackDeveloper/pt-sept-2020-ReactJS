import { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Store } from './store'

import Form from './pages/form/Form'
import Children from './pages/children/Children'
import Search from './pages/search/Search'
import './App.css'

const getTime = () => {
  const d = new Date()
  const h = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()
  return `${h}:${m}:${s}`
}

const App = () => {
  const [watch, setWatch] = useState(getTime())
  const [rndList, setRndList] = useState([])

  const handleClick = () => setRndList(prevState => [...prevState, ~~(Math.random() * 1000)])

  useEffect(() => {
    let id = setInterval(() => {
      setWatch(getTime())
    }, 1000)

    return () => clearInterval(id)
  }, [])

  console.info('> watch: ', watch)

  return (
    <section>
      <Store.Provider value={{ watch, handleClick }}>
        <Switch>
          <Route exact path="/form">
            <Form />
          </Route>

          <Route exact path="/children">
            <Children />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Redirect to="/form" />
        </Switch>

        <section>
          Lista sempiterna:
          <ul>
            { rndList.map((rnd, index) => {
              return <li key={index}>{rnd}</li>
            }) }
          </ul>
        </section>
      </Store.Provider>
    </section>
  )
}

export default App
