import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingContext } from '../context/ShoppingContext';
import { useContext } from 'react';

function Details({ pizzas }) {
  const { pizzaName } = useParams();
  const {shopping, setShopping} = useContext(ShoppingContext)
  
  const pizza = pizzas.find((pizza) => pizza.name === pizzaName);


  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }


  const addToCart = (pizza) => {
    const updatedCart = { ...shopping };
    if (updatedCart[pizza.id]) {
      updatedCart[pizza.id] += 1;
    } else {
      updatedCart[pizza.id] = 1;
    }    
    setShopping(updatedCart)
  }

  return (
    <div className='detail-container'>
      <img className='detail-left' src={pizza.img} alt={pizza.name} />
      <div className='detail-right'>
        <h1> Pizza {pizza.name}</h1>
        <p>{pizza.desc}</p>
        <p className="pizza-ingredients">
        <strong>Ingredientes:</strong>
    </p>
    <ul className="pizza-ingredients">
      {pizza.ingredients.map((ingredient, index) => (
        <li key={index}>
        🍕 {ingredient}
        </li>
      ))}
    </ul>
        
        <p>Precio: ${pizza.price}</p>
        <button className="btn-add-to-cart" onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
      </div>
    </div>
  );
}

export default Details;
