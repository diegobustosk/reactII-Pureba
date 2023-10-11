import React, { useContext } from 'react';
import { ShoppingContext } from '../context/ShoppingContext';
import '../styles/Carrito.css'; // Asegúrate de importar tu archivo CSS como 'Carrito.css'

function Carrito({ pizzas }) {
  const { shopping, setShopping } = useContext(ShoppingContext);

  const removePizza = (pizzaId) => {
    const updatedCart = { ...shopping };
    if (updatedCart[pizzaId] > 1) {
      updatedCart[pizzaId] -= 1;
    } else {
      delete updatedCart[pizzaId];
    }
    setShopping(updatedCart);
  };

  const addPizza = (pizzaId) => {
    const updatedCart = { ...shopping };
    if (updatedCart[pizzaId]) {
      updatedCart[pizzaId] += 1;
    } else {
      updatedCart[pizzaId] = 1;
    }
    setShopping(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const pizzaId in shopping) {
      const pizza = pizzas.find((p) => p.id === pizzaId);
      if (pizza) {
        total += pizza.price * shopping[pizzaId];
      }
    }
    return total;
  };

  return (
    <div className="cart-container"> 
      <h3>Detalles del Pedido:</h3>
      <div className="cart-items"> 
        {Object.keys(shopping).map((pizzaId) => {
          const pizza = pizzas.find((p) => p.id === pizzaId);
          if (pizza) {
            return (
              <div key={pizza.id} className="cart-item"> 
                <img src={pizza.img} alt={pizza.name} className="cart-item-image" /> 
                <div className="cart-item-details"> 
                  <h3>{pizza.name}</h3>
                  <p className="cart-item-ingredients"> 
                    <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
                  </p>
                  <p>Precio: ${pizza.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-actions"> 
                  <button
                    className="btn-remove" /* Clase HTML modificada */
                    onClick={() => removePizza(pizza.id)}
                  >
                    -
                  </button>
                  {shopping[pizza.id]}
                  <button
                    className="btn-add" /* Clase HTML modificada */
                    onClick={() => addPizza(pizza.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-total"> 
        <p>Total: <b>{calculateTotal().toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</b> CLP</p>
      </div>
    </div>
  );
}

export default Carrito;
