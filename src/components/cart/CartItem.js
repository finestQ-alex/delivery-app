import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import cartContext from "../../context/cartContext";

const CartItem = (props) => {
  const cartContextInfo = useContext(cartContext);

  //item 빼기
  const itemExtractHandler = () => {
    cartContextInfo.cartDispatch({ type: "remove", id: props.id });
  };

  //item 추가
  const itemAddHandler = () => {
    cartContextInfo.cartDispatch({
      type: "add",
      item: {
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: 1,
      },
    });
  };

  return (
    <div className={classes.cartItem}>
      <header className={classes.cartItemHeader}>
        <h4>{props.name}</h4>
        <div>
          <button onClick={itemExtractHandler}>-</button>
          <button onClick={itemAddHandler}>+</button>
        </div>
      </header>
      <main>
        <span>count x </span>
        <input type="text" value={props.quantity} />
      </main>
    </div>
  );
};

export default CartItem;
