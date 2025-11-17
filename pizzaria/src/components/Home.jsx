
import React from 'react';

import { pizzas } from '../data/pizzas'; 

import CardPizza from './CardPizza'; 

import React, { useState, useEffect } from 'react';
import PizzaCard from './PizzaCard'; // Un componente para cada tarjeta

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Función para consumir la API y actualizar el estado
    const fetchPizzas = async () => {
      const url = 'http://localhost:5000/api/pizzas';
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
      setCargando(false);
    };

    fetchPizzas();
  }, []); // Se ejecuta solo al montar el componente

  // ➡️ LÓGICA DE RENDERIZACIÓN ⬅️
  return (
    <div className="pizza-list">
      <h1>Menú de Pizzas Mamma Mía</h1>
      
      {/* 1. Renderizado Condicional */}
      {cargando && <p>Cargando menú...</p>}

      {/* 2. Uso del método map() para renderizar la lista */}
      {!cargando && pizzas.length > 0 ? (
        pizzas.map((pizza) => (
          // **CLAVE:** Cada elemento repetido debe tener la propiedad 'key'
          <PizzaCard 
            key={pizza.id} // Usar un ID único del objeto
            nombre={pizza.nombre}
            precio={pizza.precio}
            imagen={pizza.img}
            descripcion={pizza.desc}
            ingredientes={pizza.ingredients}
            // ... otras props
          />
        ))
      ) : (
        // Mensaje alternativo si no se cargaron las pizzas
        !cargando && <p>No se encontraron pizzas.</p>
      )}
    </div>
  );
}


export default Home;