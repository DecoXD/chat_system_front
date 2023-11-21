
import Input from '../../components/Form/Input'
import formStyles from '../../components/Form/Form.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {login:enter} = useContext(Context)
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()
  
  async function handleLogin(e){
    e.preventDefault()
    const userData = {
      login,
      password,
    }
    try {
      await enter(userData) 
    } catch (error) {
      console.log('erro no login',error)
      navigate('/login')
    }
    
    
    

  }
  
  return (

  <section className={formStyles.form_section}>

    <div className={formStyles.form_container}>

        <h2>Login</h2>
        <p>seja bem vindo ao nosso sistema de mensagens</p>

        <form action='/register'   className={formStyles.form_controll} onSubmit={handleLogin}>
        
          <Input type={'text'} name = {'login'} dataName={'login'}handleOnChange={(e)=>setLogin(e.target.value)} />

          <Input type={'text'} name = {'password'} dataName={'password'}
          handleOnChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" className='btn_dark' value="Login" />
        </form>

        <p>não possui acesso? <a href="/register">registre-se</a></p>
    </div>

  </section>
  )
}

export default Login