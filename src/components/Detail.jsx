import React from 'react';
import { useParams } from 'react-router-dom';

function Details({ pizzas }) {
  const { pizzaName } = useParams();
  const pizza = pizzas.find((pizza) => pizza.name === pizzaName);

  // Verifica si la pizza se ha encontrado
  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }

  // Renderiza los detalles de la pizza
  return (
    <div>
      <h1>Detalles de {pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p className="pizza-ingredients">
        <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
      </p>
      <p>Precio: ${pizza.price}</p>
      {/* Aquí puedes agregar más información sobre la pizza si es necesario */}
    </div>
  );
}

export default Details;
