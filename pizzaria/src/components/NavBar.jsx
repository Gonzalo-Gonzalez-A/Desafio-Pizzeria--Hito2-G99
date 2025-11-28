import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Importar Contexto

const Navbar = () => {
  // Requisito 2 y 5: CONSUMO: Obtener la función de cálculo del total
  const { calculateTotal } = useContext(CartContext);
  const total = calculateTotal();

  const token = false;

  // Formato para el total en CLP (Peso Chileno)
  const formattedTotal = total.toLocaleString("es-CL");

  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* === SECCIÓN IZQUIERDA === */}
        <div>
          <Link to="/" className="btn btn-outline-light me-2">
            🍕 Home
          </Link>
        </div>

        {/* === SECCIÓN DERECHA: CARRITO CON TOTAL DINÁMICO === */}
        <div>
          {/* ... Lógica de Token omitida ... */}

          <Link to="/cart" className="btn btn-success">
            🛒 Total: **${formattedTotal}**
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;