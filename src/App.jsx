import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Details from './components/Detail'
import Carrito from './components/ShoppingCart';
import { Route, Routes } from 'react-router'

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('../../public/pizzas.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <>
      <Navbar pizzas={pizzas}/>
      <Routes>
      <Route path="/" element={<Home pizzas={pizzas} />} />
      <Route path="/pizza/:pizzaName" element={<Details pizzas={pizzas} />} />
      <Route path="/carrito" element={<Carrito pizzas={pizzas} />} />
      </Routes>
    </>
  )
}

export default App
