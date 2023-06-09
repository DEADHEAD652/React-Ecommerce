import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {
  const { id, productName, Price, ProductImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItem } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={ProductImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${Price}</p>
        <div className="countHandler">
          <button
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItem(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
