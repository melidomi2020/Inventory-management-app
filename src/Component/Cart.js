import React from 'react'
import { useState, useEffect } from "react";
import "../styles/cart.css";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState("");
  const [paid, setPaid] = useState('')
  const [balance, setBalance] = useState(0);


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handleBalance = (event) => {
    event.preventDefault();
    let newbalance;
    newbalance = parseInt(paid) - price;
    if(newbalance<0){
      newbalance="Enter the correct amount!!!"
    }
    
    setBalance(newbalance);

  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.qty * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="selected-products-container">
      <div className="parent-container">

        <table id="products1" className="parent-table">
          <thead>
            <tr>
              <th>Remove</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {cart
              .map(

                (item) => {
                  return (
                    <tr>
                      <td>

                        <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                      </td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.qty}</td>
                      <td>
                     <div className='btns'>
                        <button className='btn-add' onClick={() => handleChange(item, 1)}>+</button>
                      
                        <button className='btn-sub' onClick={() => handleChange(item, -1)}>-</button>

                        </div>
                      </td>
                    </tr>
                  );
                }

              )}
          </tbody>
        </table>
        <div>
          <div className="toppings-list-item">
            <div className="left-section">
              Total:{price}
            </div>



          </div>
          <div className='balance-container'>
            <div className='content-container'>
              <form onSubmit={handleBalance}>
                <label>Enter Amount:
                  <input type="text" value={paid}
                    onChange={(e) => setPaid(e.target.value)} />
                </label>
                <input type="submit" />
              </form>

            </div>
          </div>
          <div className='balance'>
          <div className="right-section">Balance:{balance}</div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Cart