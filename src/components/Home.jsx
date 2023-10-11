import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home({ pizzas }) {
  return (
    <div>
      <h1>Lista de Pizzas</h1>
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <h3>{pizza.name}</h3>
            <p className="pizza-ingredients">
              <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
            </p>
            <p>Precio: ${pizza.price}</p>
            <Link to={`/pizza/${pizza.name}`} className="btn-ver-mas">Ver Más</Link>
            <button className="btn-add-to-cart">Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
