import React, { useEffect } from 'react';
import { useUserContext } from '../context/UserContext'; 

const Profile = () => {
  const { profile, email, getProfile, logout, token } = useUserContext();

  useEffect(() => {
    // Si hay token y aún no cargamos el perfil, lo solicitamos.
    if (token && !profile) {
        getProfile();
    }
  }, [token, profile, getProfile]);
  
  // Muestra el email del estado local mientras se carga el perfil, o el email del perfil.
  const displayedEmail = profile ? profile.email : email;

  return (
    <div className="container mt-5">
      <h1>Mi Perfil</h1>
      {profile ? (
        <div className="card p-4">
          {/* REQUERIMIENTO 5: Muestra el email */}
          <p><strong>Email del Usuario:</strong> {displayedEmail}</p>
          {/* Muestra cualquier otro dato que la ruta /api/auth/me devuelva */}
          
          {/* REQUERIMIENTO 5: Botón para cerrar sesión */}
          <button 
            onClick={logout} 
            className="btn btn-danger mt-3"
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <p>Cargando información del perfil...</p>
      )}
    </div>
  );
};

export default Profile;