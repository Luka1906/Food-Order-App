import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContext } from "./store/shopping-cart-context";

function App() {
  return (
    <>
      <Header />
      <Meals />
      <Cart />
    </>
    // <CartContext>

    // </CartContext>
  );
}

export default App;
