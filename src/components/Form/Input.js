
import styles from './Form.module.css'

const Input = ({type,name,dataName,handleOnChange}) => {

    
  return (

    <div className={styles.input_controll}>
        <span>{name}</span>
        <input type={type} name={dataName}  onChange={handleOnChange}/>
    </div>
  )
}

export default Input