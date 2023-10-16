import { Link } from 'react-router-dom'
import { AuthLayout } from '../Layout/AuthLayout'
import { AuthInput, AuthButton } from '../components/'

import styles from '../styles/AuthPage.module.css'
import { useForm } from '../hooks/useForm'
import axios from 'axios'
import { useContext } from 'react'
import {AuthContext} from '../../context/authContext'

export const LoginPage = () => {

  const {formValues,email, password, handleChange} = useForm({
    email : '',
    password : ''
  })

  const authContexto = useContext(AuthContext)
  const { setAuth } = authContexto
  console.log(authContexto)

  // const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()

    const Usuario = {
      email: formValues.email,
      contrasena: formValues.password
    }
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', Usuario)
      console.log(res)
      setAuth({
        login: true,
        user:  res.data.usuario 
      })
      localStorage.setItem('auth', JSON.stringify({
        login: true,
        user:  res.data.usuario 
      }))
      
    } catch (error) {
      console.log(error)
    }


    console.log(formValues)
  }
  
  return (
    <AuthLayout>
      <div className={styles.authContainer}>
        <h1 className={styles.title}>Login</h1>
        <form 
        onSubmit={handleSubmit}
        className={styles.authForm}
        >

          <AuthInput
          placeholder='example@gmail.com'
          type='email'
          label='Email'
          name='email'
          value={email}
          handleChange={handleChange}
          />

          <AuthInput
          placeholder='Enter your password'
          type='password'
          label='Password'
          name='password'
          value={password}
          handleChange={handleChange}
          />

          <AuthButton
          type='submit'
          text='Sign in'
          />

        <p>{"Don't have account ?"} <Link to={'/auth/register'}>Sign up</Link></p>

        </form>

      </div>
      
    </AuthLayout>
  )
}
