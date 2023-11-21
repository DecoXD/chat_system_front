import { useContext } from 'react'
import { Context } from '../../context/authContext'
import styles from './HeaderComponent.module.css'
import PrimaryNav from './primaryNav/PrimaryNav'

const HeaderComponent = () => {
  
  const {isAuthenticated} = useContext(Context)
  
  
  console.log(isAuthenticated,'coelhos')
  return (
    <header className={styles.header}>
        <h1>Go Tók</h1>

        <PrimaryNav isAuth={isAuthenticated}/>
    </header>
  )
}

export default HeaderComponent