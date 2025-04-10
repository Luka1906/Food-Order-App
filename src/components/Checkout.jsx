import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";

export default function Checkout() {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  return (
    <Modal>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount:{currencyFormatter.format(cartTotal)} </p>
        
      </form>
    </Modal>
  );
}
