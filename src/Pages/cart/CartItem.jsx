import React ,{useContext} from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {
  const { id, productName, price, ProductImage } = props.data;
  const { cartItems ,addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={ProductImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() =>{removeFromCart(id)}}>-</button>
          <input value={cartItems[id]} onChange={(e) =>{}} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
