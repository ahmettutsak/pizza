import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, amount } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.amount += amount;
      } else {
        const newItem = { id, name, price, amount };
        state.cartItems.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.amount > 1) {
          existingItem.amount -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementByAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
