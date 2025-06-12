import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Each item: { name, image, description, cost, quantity }
  },
  reducers: {
    // Add item to cart or increase quantity if it already exists
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Remove item by name
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;