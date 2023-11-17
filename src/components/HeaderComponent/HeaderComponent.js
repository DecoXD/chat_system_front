import styles from './HeaderComponent.module.css'
import PrimaryNav from './primaryNav/PrimaryNav'

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
        <h1>Go Tók</h1>
        <PrimaryNav/>
    </header>
  )
}

export default HeaderComponent