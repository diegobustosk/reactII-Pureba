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
    <div>
      <h1>Detalles de {pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p className="pizza-ingredients">
        <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
      </p>
      <p>Precio: ${pizza.price}</p>
      <button className="btn-add-to-cart" onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
    </div>
  );
}

export default Details;
