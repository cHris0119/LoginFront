import styles from '../styles/AuthPage.module.css'

export const AuthLayout = ({ children}) => {
  return (
    <div className={styles.authLayout}>

        { children }
    </div>
  )
}
