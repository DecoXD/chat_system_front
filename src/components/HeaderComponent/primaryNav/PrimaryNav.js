import {Link} from 'react-router-dom'

const PrimaryNav = ({isAuth,handleLogout}) => {
  return (
    <nav>
        {isAuth &&
        <>
         <a onClick={() => handleLogout()}>logout</a>
        <Link to={'/dashboard'}>dashboard</Link>
        
        </>}
        {!isAuth && 
        <>
        <Link to={'/register'}>register</Link>
        <Link to={'/login'} >login</Link>
        </> }
    </nav>
  )
}

export default PrimaryNav