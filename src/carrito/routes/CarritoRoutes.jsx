import { Routes, Route, Navigate } from "react-router-dom"
import { CarritoPage } from "../pages"


export const CarritoRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<CarritoPage />} />
        
        <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
