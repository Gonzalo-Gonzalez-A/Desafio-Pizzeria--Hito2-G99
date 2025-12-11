import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

// 💡 Define la URL base de tu backend
const API_URL = 'http://localhost:3000/api/auth'; 

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Almacena el JWT
  const [email, setEmail] = useState(null); // Almacena el email del usuario
  const [profile, setProfile] = useState(null); // Datos del perfil de /api/auth/me
  const navigate = useNavigate();

  // -----------------------------------------------------------
  // REQUERIMIENTO 1: LOGIN Y REGISTER
  // Función auxiliar para manejar la lógica de autenticación
  const authHandler = async (endpoint, userEmail, userPassword) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, password: userPassword }),
      });

      if (!response.ok) {
        // Manejo de errores de credenciales (400, 401)
        throw new Error('Credenciales inválidas o error de registro.');
      }

      const data = await response.json();
      
      // Almacena el token y el email que devuelve la API
      setToken(data.token);
      setEmail(data.email); 
      setProfile(null); // Limpiamos el perfil anterior
      
      // ⚠️ Opcional: Persistir el token en localStorage para que no se pierda al recargar
      // localStorage.setItem('jwt', data.token);

      return true;
    } catch (error) {
      console.error('Error de autenticación:', error);
      return false;
    }
  };

  const login = (userEmail, userPassword) => authHandler('/login', userEmail, userPassword);
  const register = (userEmail, userPassword) => authHandler('/register', userEmail, userPassword);

  // -----------------------------------------------------------
  // REQUERIMIENTO 2: LOGOUT
  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);
    // localStorage.removeItem('jwt'); // Si usaste localStorage
    navigate('/login');
  };

  // -----------------------------------------------------------
  // REQUERIMIENTO 3: OBTENER PERFIL (/api/auth/me)
  const getProfile = async () => {
    if (!token) return;

    try {
      const response = await fetch(`${API_URL}/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 🔑 CLAVE: Incluir el JWT en el header de autorización
          'Authorization': `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        // Si el token expiró o es inválido, forzamos el cierre de sesión
        throw new Error('Token inválido o expirado.');
      }

      const data = await response.json();
      setProfile(data); // Almacena los datos del perfil

    } catch (error) {
      console.error('Error al obtener perfil. Cerrando sesión.', error);
      logout();
    }
  };

  const contextValue = {
    token,
    email,
    profile,
    login,
    register,
    logout,
    getProfile,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);