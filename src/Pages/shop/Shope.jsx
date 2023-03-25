import React from "react";
import {PRODUCTS} from "../../products";
import Product from "./product";
import './shop.css'

function Shope() {
  return (
    <div className="shope">
      <div className="shopTitle">Hamza Tech Shop</div>
      <div className="products"> 
      {PRODUCTS.map((product) => (

<Product data={product}/>

      ))}
      
      
      </div>
    </div>
  );
}

export default Shope;
