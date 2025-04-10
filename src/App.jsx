import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContext } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <Header />
      <Meals />
      <Cart />
    </UserProgressContextProvider>
    // <CartContext>

    // </CartContext>
  );
}

export default App;
