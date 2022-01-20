import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

const Item = (props) => {
  console.log(props);
  // const item = useContext(CartContext);
  const handleDelete = (item) => {
    console.log(item);
  };
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => handleDelete(props)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
