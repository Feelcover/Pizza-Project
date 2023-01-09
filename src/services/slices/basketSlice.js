import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const repeatIdObject = state.items.find(
        (item) => item.id === action.payload.id
      );
      const repeatTypeObject = state.items.find(
        (item) => item.type === action.payload.type
      );
      const repeatSizeObject = state.items.find(
        (item) => item.size === action.payload.size
      );
      if (repeatIdObject && repeatTypeObject && repeatSizeObject) {
        repeatIdObject.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => (item.price * item.count) + sum, 0);
    },
    removeItem: (state, action) => {
      state.items.filter((item) => item.id !== action.payload);
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
