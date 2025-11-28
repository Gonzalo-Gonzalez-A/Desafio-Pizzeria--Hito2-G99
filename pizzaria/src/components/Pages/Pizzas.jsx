import React, { useState, useEffect, use } from 'react';
import Pizza from '../CardPizza';

function Pizza() {
  const [pizza, setPizza] = useState(null); 
  const [cargando, setCargando] = useState(true);
  const {id} = useParams(); 

  useEffect(() => {
    const fetchPizza = async () => {
      // Endpoint del detalle de una pizza, por ejemplo, 'p001'
      const url = 'http://localhost:5000/api/pizzas/p001'; 
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
      setCargando(false);
    };
  if (!pizza)     
    fetchPizza();
  }, []);

  // ➡️ LÓGICA DE RENDERIZACIÓN ⬅️
  if (cargando) {
    return <div>Cargando detalle de la pizza...</div>;
  }
  
  if (!pizza) {
    return <div>Pizza no encontrada.</div>;
  }

  return (
    <div className="pizza-detalle">
      <img src={pizza.img} alt={pizza.nombre} />
      <h2>{pizza.nombre}</h2>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      
      <h3>Ingredientes:</h3>
      <ul>
        {/* Renderiza los ingredientes si es un arreglo */}
        {pizza.ingredients && pizza.ingredients.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      
      <p className="precio">Precio: ${pizza.precio.toLocaleString()}</p>
      <button>Añadir al Carrito</button>
    </div>
  );
}

export default Pizza;