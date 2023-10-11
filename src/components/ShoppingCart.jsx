import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingContext } from "../context/ShoppingContext"


function Carrito({pizzas}) {
  const {Shopping, setShopping} = useContext(ShoppingContext)
  return (
    <>
      <div className="Cartito">
        <h3> Detalles del Pedido:</h3>

      </div>
    </>
  )
}

export default Carrito