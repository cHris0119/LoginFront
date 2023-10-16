import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"


export const PublicRoutes = ({ children }) => {
  const authContexto = useContext(AuthContext)
  const { auth } = authContexto

  return (!auth.login)
  ? children
  : <Navigate to='/' />
}
