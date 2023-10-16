import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../Layout/AuthLayout'
import { AuthInput, AuthButton } from '../components'

import styles from '../styles/AuthPage.module.css'
import { useForm } from '../hooks/useForm'
import axios from 'axios'
import Swal from 'sweetalert2'


export const RegisterPage = () => {

  const {formValues , email, password,name, handleChange} = useForm({
    email : '',
    password : '',
    name: ''
  })

  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    
    const { email, password, name } = formValues
    const Usuario = {
      name,
      email,
      contrasena: password
    }
    await axios
    .post('http://localhost:4000/api/auth/register', Usuario)
    .then(({data}) => console.log(data))
    .catch(err => console.log(err))

    Swal.fire({
      icon: 'success',
      title: 'Usuario registrado correctamente',
      showConfirmButton: false,
      timer: 1500
    })

    navigate('/auth/')
  }

  return (
    <AuthLayout>
    <div className={styles.authContainer}>
      <h1 className={styles.title}>Create</h1>
      <h1 className={styles.title}> an account</h1>
      <form 
      onSubmit={handleSubmit}
      className={styles.authForm}>

        <AuthInput
        placeholder='Enter your name'
        type='text'
        name='name'
        value={name}
        handleChange={handleChange}
        />

        <AuthInput
        placeholder='Enter your email'
        type='email'
        name='email'
        value={email}
        handleChange={handleChange}
        />


        <AuthInput
        placeholder='Enter your password'
        type='password'
        name='password'
        value={password}
        handleChange={handleChange}
        />

        <AuthButton
        type='submit'
        text='Sign up'
        />

      <p>{"Already have an account ?"} <Link to={'/auth/login'}>Login</Link></p>

      </form>

    </div>
    
  </AuthLayout>
  )
}
