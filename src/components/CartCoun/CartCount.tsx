import React from "react";
import "./index.sass";
import { ReactComponent as LogoICart } from "../../img/icons/Shopping/Cart.svg";

const CartCount = () => {
  return (
    <button className="btn-reset cart-count" type="button">
      <LogoICart className="cart-count__icon" />
      <div className="cart-count__count">4</div>
    </button>
  );
};

export default CartCount;
