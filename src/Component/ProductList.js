import React from "react";
import { useState } from "react";
import { products } from "../Model/products";
import "../styles/item.css"

import Cart from "./Cart";



const ProductList = ({handleClick}) => {
  

  const [query, setQuery] = useState("");
  
  
  
  return (
    <div>
      <div className="header-container">
        <div className="header">INVENTORY LIST</div>

        <div></div>
        <div className="search-container">
          <div className="search">
            <input
              type="text"
              placeholder="search.."
              className="search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="product-list-container">
        <div className="products-container">
          <table id="products">
            <thead>
              <tr>
                <th>Add-Item</th>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((product) =>
                   product.name.toLocaleLowerCase().includes(query)
                 )
                .map((product) => {
                  <Cart key={product.id}/>
                  
                  return (
                
                    <tr>
                      <td>
                        
                        <button className="btn" onClick={() => handleClick (product)}>Add</button>
                      </td>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>$ {product.price}</td>
                    </tr>
                  );
                })
                }
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default ProductList;


