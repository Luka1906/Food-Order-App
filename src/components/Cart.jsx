import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CartItem from "./CartItem";

export default function Cart () {

    return (
      <div className="cart">
        <h2>Your Cart</h2>
      </div>
    )
}