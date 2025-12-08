import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// 🎯 Importar el nuevo UserContext y su hook
import { UserContext } from "../context/UserContext"; 

const Navbar = () => {
  // Requisito 2 y 5 (Cart): Obtener la función de cálculo del total
  const { calculateTotal } = useContext(CartContext);
  const total = calculateTotal();

  // 🎯 Requisito 2 y 3 (Auth): Consumir el UserContext para obtener token y logout
  const { token, logout } = useContext(UserContext); 

  // Formato para el total en CLP (Peso Chileno)
  const formattedTotal = total.toLocaleString("es-CL");

  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* === SECCIÓN IZQUIERDA: HOME (Siempre visible) === */}
        <div className="d-flex align-items-center">
          <Link to="/" className="btn btn-outline-light me-3">
            🍕 Home 
          </Link>

          {/* === SECCIÓN DE AUTH DINÁMICA === */}
          {token ? (
            // Cuando el token es true, muestra Profile y Logout 
            <>
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  "btn me-2 " + (isActive ? "btn-info" : "btn-outline-info")
                }
              >
                Profile 
              </NavLink>
              <button 
                onClick={logout}
                className="btn btn-outline-danger me-2"
              >
                Logout 
              </button>
            </>
          ) : (
            // Cuando el token es false, muestra Login y Register 
            <>
              <NavLink 
                to="/login" 
                className={({ isActive }) => 
                  "btn me-2 " + (isActive ? "btn-info" : "btn-outline-info")
                }
              >
                Login 
              </NavLink>
              <NavLink 
                to="/register" 
                className={({ isActive }) => 
                  "btn me-2 " + (isActive ? "btn-info" : "btn-outline-info")
                }
              >
                Register 
              </NavLink>
            </>
          )}
        </div>

        {/* === SECCIÓN DERECHA: CARRITO CON TOTAL DINÁMICO (Siempre visible) === */}
        <div>
          <Link to="/cart" className="btn btn-success">
            🛒 Total: **${formattedTotal}** 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;