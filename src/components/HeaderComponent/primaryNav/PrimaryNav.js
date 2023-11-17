import {Link} from 'react-router-dom'

const PrimaryNav = () => {
  return (
    <nav>
        <Link to={'/register'}>register</Link>
        <Link to={'/login'}>login</Link>
    </nav>
  )
}

export default PrimaryNav