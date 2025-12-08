import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext'; // 🎯 Importar UserContext

const CartPage = () => {
  // Consumo del CartContext
  const { cart, calculateTotal, clearCart, removePizzaFromCart } = useContext(CartContext);
  const total = calculateTotal();
  const formattedTotal = total.toLocaleString("es-CL");

  // 🎯 Requerimiento 4: Consumo del UserContext para obtener el token
  const { token } = useContext(UserContext); 

  // Función placeholder para la compra (simulada)
  const handlePayment = () => {
    alert("¡Pago realizado con éxito! Gracias por tu compra.");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío 🥺</h2>
        <p>Añade algunas pizzas deliciosas para comenzar tu pedido.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Detalle del Carrito</h2>
      <div className="card p-3 shadow-sm">
        <ul className="list-group list-group-flush">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={item.img} alt={item.name} style={{ width: '50px', marginRight: '15px' }} />
                <span className="text-capitalize">{item.name}</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3">${(item.price * item.count).toLocaleString('es-CL')}</span>
                <button 
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removePizzaFromCart(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.count}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-end">
          <h3>Total a Pagar: <span className="text-success">${formattedTotal}</span></h3>
          <hr />
          
          {/* 🎯 Requerimiento 4: Deshabilitar el botón si el token es false */}
          <button
            className="btn btn-primary btn-lg mt-3"
            onClick={handlePayment}
            disabled={!token} // Se deshabilita si el token es falso
          >
            Pagar
          </button>
          
          {!token && (
            <p className="mt-2 text-danger">
              ⚠️ Debes **iniciar sesión** para completar la compra.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;