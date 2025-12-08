import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

// Componente para proteger rutas que REQUIEREN autenticación (e.g., /profile)
export const ProtectedRoute = ({ redirectTo = '/login' }) => {
  const { token } = useUserContext();

  // Si el token es false, redirige a /login [cite: 34]
  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  // Si el token es true, permite el acceso
  return <Outlet />;
};

// Componente para proteger rutas que NO DEBEN ser accesibles si estás logueado (e.g., /login, /register)
export const PublicOnlyRoute = ({ redirectTo = '/' }) => {
  const { token } = useUserContext();

  // Si el token es true, redirige al home [cite: 35]
  if (token) {
    return <Navigate to={redirectTo} replace />;
  }

  // Si el token es false, permite el acceso (es público)
  return <Outlet />;
};