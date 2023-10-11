import { NavLink } from "react-router-dom"


function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)
  return (
    <>
      <header>
        <div className="navbar-link">
          <NavLink className={ setActiveClass } to='/'> Pizzeria Mama Mía 🍕 </NavLink>
          <NavLink className={ setActiveClass } to='/:id'>  🛒 </NavLink>
        </div>
      </header>
    </>
  )
}

export default Navbar