import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"


export const PrivateRoutes = ({ children }) => {
  const authContexto = useContext(AuthContext)
  const { auth } = authContexto

  console.log(authContexto)

  return (auth.login)
  ? children
  : <Navigate to='/auth' />
}
