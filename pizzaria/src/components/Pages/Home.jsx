import React, { useState, useEffect, useContext } from 'react';
import CardPizza from '../CardPizza';
import { CartContext } from '../../context/CartContext'; // Importar Contexto

function HomePage() {
  const [pizzas, setPizzas] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Requisito 3: CONSUMO: Obtener la función para añadir pizzas
  const { addPizzaToCart } = useContext(CartContext);

  useEffect(() => {
    // ... Lógica de fetchPizzas usando 'http://localhost:5000/api/pizzas' ...
    // (código de fetch omitido por brevedad)
    const fetchPizzas = async () => { /* ... */ };
    fetchPizzas();
  }, []);

  // ➡️ LÓGICA DE RENDERIZACIÓN ⬅️
  return (
    <div className="pizza-list">
      <h1>Menú de Pizzas Mamma Mía</h1>

      {cargando && <p>Cargando menú...</p>}

      {!cargando && pizzas.length > 0 && (
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza
                pizza={pizza}
                // PASO LA FUNCIÓN DEL CONTEXT COMO PROP 'onAddToCart'
                onAddToCart={addPizzaToCart}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;