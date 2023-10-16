import styles from './AuthButton.module.css'

export const AuthButton = (
    {
        type,
        text
    }
) => {
  return (
    <button
    type={type}
    className={styles.button}
    >
        { text }
    </button>
  )
}
