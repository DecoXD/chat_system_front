import { useContext } from 'react'
import { Context } from '../../context/authContext'
import styles from './HeaderComponent.module.css'
import PrimaryNav from './primaryNav/PrimaryNav'

const HeaderComponent = () => {
  
  const {isAuthenticated,logout} = useContext(Context)
  
  return (
    <header className={styles.header}>
        <h1>Go Tók</h1>
        <PrimaryNav isAuth={isAuthenticated} handleLogout={logout}/>
    </header>
  )
}

export default HeaderComponent