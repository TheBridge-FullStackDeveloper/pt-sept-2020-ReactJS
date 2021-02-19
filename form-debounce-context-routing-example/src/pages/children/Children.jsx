import { Link } from 'react-router-dom'
import ChildOne from '../../components/childOne/ChildOne'

const Children = () => {
  return (
    <section>
      <ChildOne />
      <Link to="/form">To Form</Link>
      <br />
      <Link to="/search">To Search</Link>
    </section>
  )
}

export default Children
