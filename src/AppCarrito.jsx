import { AuthProvider } from "./context/authContext"
import { AppRouter } from "./router/"
import { BrowserRouter } from "react-router-dom"

export const AppCarrito = () => {
  return (
    <AuthProvider>

    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    
    </AuthProvider>
  )
}
