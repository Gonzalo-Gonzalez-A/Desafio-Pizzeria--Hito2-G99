import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(userEmail, password);

    if (success) {
      // 🎯 Navegar a /profile o al home después de un login exitoso
      navigate('/profile'); 
    } else {
      // Manejo de errores visual (alerta, toast, estado de error)
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <form onSubmit={handleSubmit} /* ... estilos ... */>
      {/* ... inputs para email y password ... */}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};
export default Login;

// 👉 Nota: El componente Register.jsx se implementaría de forma idéntica, solo cambiando 'login' por 'register'.