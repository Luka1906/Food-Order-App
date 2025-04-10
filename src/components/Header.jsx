import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
  const cartContext = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartContext.items.reduce(
    (totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    },
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="food-logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
