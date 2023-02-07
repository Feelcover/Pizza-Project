import { BasketInitialState } from "../services/slices/basketSlice";
import { TBasketItem } from "./types";

 export const calculate = (state: BasketInitialState) => {
    state.totalPrice = state.items.reduce(
      (sum, item) => item.price * item.count + sum,
      0
    );
    state.totalItems = state.items.reduce((sum, item) => item.count + sum, 0);
  };

  export const itemsCalculate = (items: TBasketItem[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  };
  