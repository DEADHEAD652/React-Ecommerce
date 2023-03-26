import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, ProductName, Price, ProductImage } = props.data;
  const { addToCart ,cartItems } = useContext(ShopContext);
  const cartItemAmout = cartItems[id]
  
  return (
    <div className="product">
      <img src={ProductImage} />

      <div className="description">
        <p>
          <b>{ProductName}</b>
        </p>
        <p> ${Price}</p>
      </div>
      <button className="addToCartBttn " onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmout > 0 && <>({cartItemAmout})</>}
      </button>
    </div>
  );
};
