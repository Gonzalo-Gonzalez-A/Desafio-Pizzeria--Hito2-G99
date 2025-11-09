
import React from 'react';

import { pizzas } from '../data/pizzas'; 

import CardPizza from './CardPizza'; 

function Home({ onAddToCart }) {
  
  return (
    <div className="home-container">
      <h2>¡Nuestro Menú!</h2>
      <div className="pizza-grid">

        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            pizza={pizza}
            img={img}
            name={name}
            price={price}
            ingredients={ingredients}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;