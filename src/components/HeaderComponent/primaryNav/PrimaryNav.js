import {Link} from 'react-router-dom'

const PrimaryNav = ({isAuth}) => {
  return (
    <nav>
        {isAuth &&
        <>
         <Link to={'/logout'}>logout</Link>
        <Link to={'/dashboard'}>dashboard</Link>
        
        </>}
        {!isAuth && 
        <>
        <Link to={'/register'}>register</Link>
        <Link to={'/login'}>login</Link>
        </> }
    </nav>
  )
}

export default PrimaryNav