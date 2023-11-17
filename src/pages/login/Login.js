
import Input from '../../components/Form/Input'
import formStyles from '../../components/Form/Form.module.css'
const Login = () => {
  return (
  
<section className={formStyles.form_section}>
<div className={formStyles.form_container}>
    <h2>Login</h2>
    <p>seja bem vindo ao nosso sistema de mensagens</p>
    <form action='/register'   className={formStyles.form_controll}>
        <Input type={'text'} name = {'login'} dataName={'login'}/>
        <Input type={'text'} name = {'password'} dataName={'password'}/>
        <input type="submit" className='btn_dark' value="Login" />
    </form>
    <p>não possui acesso? <a href="">registre-se</a></p>
</div>
</section>
  )
}

export default Login