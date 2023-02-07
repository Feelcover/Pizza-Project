import { createSlice } from "@reduxjs/toolkit";
import { getBasketFromStorage } from "../../utils/getBasketFromStorage";
import { calculate } from "../../utils/getTotalCalculate";
import { TBasketItem } from "../../utils/types";
import { RootState } from "../store";

export interface BasketInitialState {
  items: TBasketItem[];
  totalPrice: number;
  totalItems: number;
}

const basket = getBasketFromStorage();

const initialState: BasketInitialState = {
  items: basket.basketItems,
  totalPrice: basket.totalPrice,
  totalItems: basket.totalItems,
};


const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const repeat = state.items.find(
        (item) => item.itemParams === action.payload.itemParams
      );

      if (repeat) {
        repeat.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      calculate(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.itemParams !== action.payload
      );
      calculate(state);
    },
    clearBasket: (state) => {
      state.items = [];
      calculate(state);
    },
    decrementCounter: (state, action) => {
      const item = state.items.find(
        (item) => item.itemParams === action.payload
      );
      if (item && item.count > 1) {
        item.count--;
        calculate(state);
      }
    },
    incrementCounter: (state, action) => {
      const repeat = state.items.find(
        (item) => item.itemParams === action.payload
      );
      if (repeat) {
        repeat.count++;
      }
      calculate(state);
    },
  },
});

export const isItemCountSelector = (name: string) => (state: RootState) =>
  state.basketReducer.items.find((item) => item.name === name);
export const basketSelector = (state: RootState) => state.basketReducer;

export const {
  addItem,
  removeItem,
  clearBasket,
  decrementCounter,
  incrementCounter,
} = basketSlice.actions;

export default basketSlice.reducer;
