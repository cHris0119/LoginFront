import styles from './AuthInput.module.css'

export const AuthInput = ({
    placeholder,
    type,
    label,
    name,
    value,
    handleChange
}) => {
  return (
    <div className={styles.inputContainer}>
        <label htmlFor={label}>{label}</label>
        <input
        placeholder={placeholder}
        type={type}
        id={label}
        name={name}
        className={styles.inputAuth}
        value={value}
        onChange={handleChange}
        />        
    </div>
  )
}
