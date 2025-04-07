import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  updateItemQuantity: () => {}
});

export default function CartContextProvider() {
    const [shoppingCart, setShoppingCart] = useState({
        items: []
    });

    function handleAddItemToCart (id) {
        setShoppingCart((prevCart) => {
            const prevCartItems = [...prevCart.items];
           


        })
    }
};
