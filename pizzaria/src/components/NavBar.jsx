import { Link } from "react-router-dom";

const Navbar = () => {
  // Datos estáticos:
  const total = 25000;
  const token = false; // Cámbialo a true para probar el estado "logueado"

  // Formato para el total en CLP (Peso Chileno)
  const formattedTotal = total.toLocaleString("es-CL");

  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* === SECCIÓN IZQUIERDA: ENLACES PRINCIPALES === */}
        <div>
          {/* 🍕 Home Link (Ruta: /) */}
          <Link to="/" className="btn btn-outline-light me-2">
            🍕 Home
          </Link>
        </div>

        {/* === SECCIÓN DERECHA: AUTENTICACIÓN Y CARRITO === */}
        <div>
          {token ? (
            // === ESTADO: USUARIO LOGUEADO (token es true) ===
            <>
              {/* 🔓 Profile Link (Ruta: /profile) */}
              <Link to="/profile" className="btn btn-outline-light me-2">
                🔓 Profile
              </Link>
              
              {/* 🔒 Logout Button (Normalmente un <button> para ejecutar una acción) */}
              <button className="btn btn-outline-light me-2">
                🔒 Logout
              </button>
            </>
          ) : (
            // === ESTADO: USUARIO NO LOGUEADO (token es false) ===
            <>
              {/* 🔐 Login Link (Ruta: /login) */}
              <Link to="/login" className="btn btn-outline-light me-2">
                🔐 Login
              </Link>
              
              {/* 📝 Register Link (Ruta: /register) */}
              <Link to="/register" className="btn btn-outline-light me-2">
                📝 Register
              </Link>
            </>
          )}

          {/* 🛒 Carrito Link (Ruta: /cart) - Siempre visible */}
          <Link to="/cart" className="btn btn-success">
            🛒 Total: ${formattedTotal}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;