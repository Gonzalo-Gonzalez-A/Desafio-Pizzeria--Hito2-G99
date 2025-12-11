import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
// Asume que tienes un hook para tu carrito (ej: useCartContext)
import { useCartContext } from '../context/CartContext'; 

const Cart = () => {
  const { token } = useUserContext();
  const { cart, clearCart, calculateTotal } = useCartContext(); 
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleCheckout = async () => {
    // Evita la llamada si ya está deshabilitado, pero es buena práctica verificar
    if (!token) return; 

    try {
      // REQUERIMIENTO 7: Llamada a /api/checkouts con JWT
      const response = await fetch('http://localhost:3000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 🔑 CLAVE: Enviar el token en el header Authorization
          'Authorization': `Bearer ${token}`, 
        },
        // Envía el contenido del carrito
        body: JSON.stringify({ cart: cart }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar el pago. Inténtalo de nuevo.');
      }

      // REQUERIMIENTO 8: Proceso exitoso
      setSuccessMessage('¡Pago realizado con éxito! Gracias por tu compra.');
      clearCart(); 
      
    } catch (error) {
      console.error('Error de checkout:', error);
      setSuccessMessage('Hubo un error al procesar el pago. Por favor, verifica tu conexión.');
    }
  };

  return (
    <div className="container mt-5">
      {/* ... Contenido del carrito ... */}
      
      {/* REQUERIMIENTO 8: Muestra el mensaje de éxito/error */}
      {successMessage && <div className="alert alert-info mt-3">{successMessage}</div>}

      <button 
        onClick={handleCheckout} 
        className="btn btn-success mt-3"
        // Hito 7: Deshabilitado si no hay token (¡y si el carrito está vacío!)
        disabled={!token || cart.length === 0} 
      >
        Pagar Total: ${calculateTotal().toLocaleString("es-CL")}
      </button> 
    </div>
  );
};

export default Cart;