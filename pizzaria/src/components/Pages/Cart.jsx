import React from 'react';

function Cart({ cartItems, total, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="cart-container">
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
                  onClick={() => onRemove(item.id)}
                  title="Eliminar ítem"
                >
                  ✖
                </button> 
                
                <span className="item-name">**{item.name}**</span>
                
                <div className="item-controls">
                  {/* 2. Botón para disminuir la cantidad */}
                  <button onClick={() => onDecrement(item.id)}>-</button>
                  <span className="item-count">Cantidad: **{item.count}**</span>
                  {/* 2. Botón para aumentar la cantidad */}
                  <button onClick={() => onIncrement(item.id)}>+</button>
                </div>
                
                <span className="item-price">
                  Subtotal: **${(item.price * item.count).toLocaleString('es-CL')}**
                </span>
              </li>
            ))}
          </ul>
          
          <hr/>

          <div className="cart-total">
            {/* 3. Muestra el total de la compra */}
            <h3>Total a Pagar: **${total.toLocaleString('es-CL')}**</h3>
            <button className="checkout-button">Pagar Ahora</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;