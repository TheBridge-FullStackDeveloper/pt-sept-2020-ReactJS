import Button from './components/button/Button'
import './app.scss'

const App = () => {
  return (
    <div className="app-container">
      <Button text="launch" />
      <Button text="add" type="warning" />
      <Button text="remove" type="danger" />
    </div>
  )
}

export default App
