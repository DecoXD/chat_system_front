import { useState } from 'react'
import Input from '../../components/Form/Input'
import styles from './Register.module.css'
import formStyles from '../../components/Form/Form.module.css'
import { Link ,useNavigate} from 'react-router-dom'

import { useAuthContext } from '../../context/authContext'

const Register = () => {
  const{register,isAuthenticate} = useAuthContext()

    const [name,setName] = useState('')
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate()
    
   


    async function handleSubmit(e){
        e.preventDefault()
        const userData = {
          name,
          login,
          password,
          confirmPassword
        }
        try {
          await register(userData)
        } catch (error) {
          console.log(error)
          navigate('/register')
        }
       
     
        
    }
  return (
    <section className={formStyles.form_section}>

      <div className={formStyles.form_container}>

        <h2>Register</h2>
        <p>Cadastre-se gratuitamente</p>

        <form   onSubmit={handleSubmit} 
                className={formStyles.form_controll}>

            <Input type={'text'} name = {'name'} dataName={'name'} handleOnChange={(e)=>setName(e.target.value)} />

            <Input type={'text'} name = {'login'} dataName={'login'}handleOnChange={(e)=>setLogin(e.target.value)} />

            <Input type={'text'} name = {'password'} dataName={'password'}
            handleOnChange={(e)=>setPassword(e.target.value)}/>

            <Input type={'text'} name = {'confirm password'} dataName={'confirm_password'} handleOnChange={(e)=>setConfirmPassword(e.target.value)}
            />
            <input type="submit" className='btn_dark' value="register" />

        </form>
        <p>ja possui acesso? <Link to="/login">entrar</Link></p>
   
    </div>
    </section>
  )
}

export default Register