import React from 'react';

function CardPizza({ pizza, onAddToCart }) {

  const { id, name, price, ingredients, desc } = pizza;

  return (
    <div className="card-pizza">
      
      {/* 1. Mostrar la información de la pizza (Usando props) */}
      <img src={pizza.img} alt={`Pizza de ${name}`} className="pizza-image" />
      <h3>{name.toUpperCase()}</h3>
      <p className="price">Precio: **${price.toLocaleString('es-CL')}**</p>
      <p className="description">{desc.substring(0, 80)}...</p> {/* Muestra una parte de la descripción */}

      <div className="ingredients-section">
        <h4>Ingredientes:</h4>
        <ul className="ingredients-list">
          {/* 2. Iterar por la lista de ingredientes y renderizar un <li> */}
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {/* Capitalizamos el ingrediente para que se vea mejor */}
              {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      <button 
        className="add-to-cart-btn"
        onClick={() => onAddToCart(id)} // Llama a la función del carrito
      >
        Añadir al Carrito
      </button>
    </div>
  );
}

export default CardPizza;