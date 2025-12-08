import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
const UserContext = createContext();

// 2. Crear el Proveedor del Contexto
export const UserProvider = ({ children }) => {
  // Estado que almacena el token, por defecto, estará en true (simulando sesión activa) 
  const [token, setToken] = useState(true);

  // Método logout que cambia el estado del token a false
  const logout = () => {
    setToken(false);
  };

  // 3. Objeto de valor que será accesible a los componentes
  const contextValue = {
    token,
    logout,
    // Podrías añadir una función de login aquí si fuera necesario
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const useUserContext = () => {
  return useContext(UserContext);
};