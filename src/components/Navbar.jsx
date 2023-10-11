import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

function Navbar({pizzas}) {
  const { shopping, setShopping } = useContext(ShoppingContext);

  // Calcular el total del carrito
  const total = Object.keys(shopping).reduce((acc, pizzaId) => {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    if (pizza) {
      const pizzaPrice = pizza.price;
      const pizzaCount = shopping[pizzaId];
      return acc + pizzaPrice * pizzaCount;
    }
    return acc;
  }, 0);

  return (
    <>
      <header>
        <div className="navbar-link">
          <NavLink  to="/">
            Pizzeria Mama Mía 🍕
          </NavLink>
          <NavLink to="/carrito">
          <h3>🛒 {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} CLP</h3>
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Navbar;
