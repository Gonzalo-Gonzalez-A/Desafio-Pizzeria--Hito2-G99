
import React from 'react';

import { pizzas } from '../data/pizzas'; 

import CardPizza from './CardPizza'; 

const Home = () => {
  return (
    <div className="container d-flex justify-content-center flex-wrap gap-4 mt-4 pb-5">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
      ))}
    </div>
  );
};

export default Home;