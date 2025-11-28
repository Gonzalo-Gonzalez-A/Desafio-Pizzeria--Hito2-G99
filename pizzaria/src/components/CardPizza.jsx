import React from 'react';

// El componente recibe el objeto pizza y la función onAddToCart (que es addPizzaToCart del Context)
function CardPizza({ pizza, onAddToCart }) {

  const { name, price, ingredients, desc } = pizza; // Desestructuramos las propiedades

  return (
    <div className="card-pizza">

      {/* 1. Mostrar la información de la pizza */}
      <img src={pizza.img} alt={`Pizza de ${name}`} className="pizza-image" />
      <h3>{name.toUpperCase()}</h3>
      <p className="price">Precio: **${price.toLocaleString('es-CL')}**</p>
      <p className="description">{desc.substring(0, 80)}...</p>

      <div className="ingredients-section">
        <h4>Ingredientes:</h4>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="add-to-cart-btn"
        // ✅ CORRECCIÓN: Llamar a la función del contexto pasando el objeto 'pizza' completo
        onClick={() => onAddToCart(pizza)}
      >
        Añadir al Carrito
      </button>
    </div>
  );
}

export default CardPizza;