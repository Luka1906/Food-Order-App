import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addToCart: () => {},
  updateItemQuantity: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return {
      ...state, items: updatedItems
    };
    //... update the state to add a meal item
  }
  if (action.type === "REMOVE_ITEM") {
    //... remove an item from the statew
  }

  return state;
}
 
export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext>{children}</CartContext>;
}

export default CartContext;
