
import './App.css';
import React, { useState, useEffect } from "react";
import ProductList from './Component/ProductList';
import Cart from './Component/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const handleClick = (product) => {
    
    if (cart.indexOf(product) !== -1) return;
    
    setCart([...cart, product]);
   
    
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].qty += d;

    if (arr[ind].qty === 0) arr[ind].qty = 1;
    setCart([...arr]);
    console.log(cart)
  };

  return (
    <div className="App">
      <ProductList handleClick={handleClick}/>
      <Cart cart={cart} setCart={setCart} handleChange ={handleChange } />
  
    </div>
  );
}

export default App;
