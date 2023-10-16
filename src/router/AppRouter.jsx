import { Routes, Route} from 'react-router-dom'
import { PublicRoutes, PrivateRoutes } from './'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CarritoRoutes } from '../carrito/routes/CarritoRoutes'


export const AppRouter = () => {

  

  return (
    <Routes>
     
        <Route path='/auth/*' element={
          <PublicRoutes>
            <AuthRoutes />
          </PublicRoutes>
         } />

        <Route path='/*' element={
          <PrivateRoutes>
            <CarritoRoutes />
          </PrivateRoutes>
         } />
     
     

    </Routes>
  )
}
