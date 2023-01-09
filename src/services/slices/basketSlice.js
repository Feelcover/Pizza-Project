import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const calculate = (state) => {
  state.totalPrice = state.items.reduce(
    (sum, item) => item.price * item.count + sum,
    0
  );
  state.totalItems = state.items.reduce((sum, item) => item.count + sum, 0);
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const repeat = state.items.find(
        (item) => item.basketId === action.payload
      );
      if (repeat) {
        repeat.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
          basketId: Math.random(),
        });
      }
      calculate(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.basketId !== action.payload);
      calculate(state);
    },
    clearBasket: (state) => {
      state.items = [];
      calculate(state);
    },
    decrementCounter: (state, action) => {
      const item = state.items.find((item) => item.basketId === action.payload);
      if (item.count > 1) {
        item.count--;
        calculate(state);
      }
    },
    incrementCounter:(state, action) => {
      const repeat = state.items.find(
        (item) => item.basketId === action.payload
      );
        repeat.count++;
        calculate(state);
    }
  },
});

export const { addItem, removeItem, clearBasket, decrementCounter, incrementCounter } =
  basketSlice.actions;

export default basketSlice.reducer;
