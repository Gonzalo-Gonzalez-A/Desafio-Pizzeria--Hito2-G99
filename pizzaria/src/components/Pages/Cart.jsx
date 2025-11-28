import React, { useContext } from 'react'; // 1. Importar useContext
import { CartContext } from '../context/CartContext'; // 2. Importar CartContext

// ❌ Se eliminan las props, ya que los datos se obtienen del contexto
function Cart() {
  // 3. Consumir el Contexto y desestructurar los valores y funciones necesarios
  const {
    cart: cartItems, // Renombramos 'cart' a 'cartItems' para coincidir con tu lógica de render
    calculateTotal,
    incrementItemQuantity, // Función a crear en el Context
    decrementItemQuantity, // Función a crear en el Context
    removeItem // Función a crear en el Context
  } = useContext(CartContext);

  // 4. Obtener el total (Requisito 5)
  const total = calculateTotal();

  return (
    <div className="cart-container">
      <h1>🛒 Detalle del Carrito</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío. ¡Añade unas deliciosas pizzas!</p>
      ) : (
        <>
          <ul className="cart-list">
            {/* 1. Recorre el array de pizzaCart (cartItems) y muestra la info */}
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">

                {/* Botón para eliminar completamente el ítem */}
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)} // ✅ Función del Context
                  title="Eliminar ítem"
                >
                  ✖
                </button>

                <span className="item-name">**{item.name}**</span>

                <div className="item-controls">
                  {/* 2. Botón para disminuir la cantidad */}
                  <button onClick={() => decrementItemQuantity(item.id)}>-</button> // ✅ Función del Context
                  <span className="item-count">Cantidad: **{item.quantity}**</span> {/* Ajustado de 'item.count' a 'item.quantity' por consistencia con el Context */}
                  {/* 2. Botón para aumentar la cantidad */}
                  <button onClick={() => incrementItemQuantity(item.id)}>+</button> // ✅ Función del Context
                </div>

                <span className="item-price">
                  Subtotal: **${(item.price * item.quantity).toLocaleString('es-CL')}** {/* Usando item.quantity */}
                </span>
              </li>
            ))}
          </ul>

          <hr />

          <div className="cart-total">
            {/* 3. Muestra el total de la compra (Requisito 5) */}
            <h3>Total a Pagar: **${total.toLocaleString('es-CL')}**</h3>
            <button className="checkout-button">Pagar Ahora</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;