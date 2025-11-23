import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  // 💡 Hook para navegar a otra página después de cerrar sesión
  const navigate = useNavigate();

  // Datos estáticos que se actualizarán en el futuro
  const userEmail = "usuario.ejemplo@pizzeria.cl";
  
  // Función placeholder para cerrar sesión
  const handleLogout = () => {
    // 1. Aquí se implementaría la lógica real de cerrar la sesión (borrar token, etc.)
    console.log("Cerrando sesión del usuario:", userEmail);
    
    // 2. Navegar al inicio o a la página de login
    navigate('/'); 
    alert("Sesión cerrada. Serás redirigido al inicio.");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="card-title text-center mb-4">
                Mi Perfil 🔐
            </h2>
            <div className="text-center mb-4">
              <p className="lead">
                **Email del Usuario:**
              </p>
              {/* Muestra el email estático */}
              <p className="h5 text-primary">
                {userEmail} 
              </p>
              <small className="text-muted">
                (Este dato será dinámico al implementar la autenticación.)
              </small>
            </div>
            
            {/* Botón para Cerrar Sesión */}
            <button 
              className="btn btn-danger btn-lg mt-3"
              onClick={handleLogout}
            >
              🔒 Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;