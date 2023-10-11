import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../context/ShoppingContext';

function Home({ pizzas }) {
  const {shopping, setShopping} = useContext(ShoppingContext)

  const addToCart = (pizza) => {
    const updatedCart = { ...shopping };
    if (updatedCart[pizza.id]) {
      updatedCart[pizza.id] += 1;
    } else {
      updatedCart[pizza.id] = 1;
    }

    console.log(pizza.id)
    console.log(shopping)
    
    setShopping(updatedCart)
  }

  useEffect(() => {
    console.log(shopping);
  }, [shopping]);

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
            <button className="btn-add-to-cart" onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
