import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

import styles from '../styles/CarritoPage.module.css'

export const CarritoPage = () => {
  const authContexto = useContext(AuthContext)
  const { setAuth, auth } = authContexto
  const { user } = auth

  const onLogout = () => {
    setAuth({login: false, user: null})
    localStorage.clear()
  }
  return (
    <div className={styles.containerCarrito}>
      <h1>
        Welcome { user.name }
      </h1>

      <button 
      className={styles.logoutButton}
      onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
