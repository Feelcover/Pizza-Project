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
   const repeatSize = state.items.find((item)=>item.size === action.payload.size);
   const repeatType = state.items.find((item)=>item.type === action.payload.type);
   const repeatId = state.items.find((item)=>item.id === action.payload.id);

  
   if(repeatSize&&repeatType){
    repeatSize.count++
   }else{state.items.push({
    ...action.payload,
    count: 1,
    basketName: action.payload.size + action.payload.type + action.payload.id,
  });}

      calculate(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.basketName !== action.payload);
      calculate(state);
    },
    clearBasket: (state) => {
      state.items = [];
      calculate(state);
    },
    decrementCounter: (state, action) => {
      const item = state.items.find((item) => item.basketName === action.payload);
      if (item.count > 1) {
        item.count--;
        calculate(state);
      }
    },
    incrementCounter:(state, action) => {
      const repeat = state.items.find(
        (item) => item.basketName === action.payload
      );
        repeat.count++;
        calculate(state);
    }
  },
});

export const { addItem, removeItem, clearBasket, decrementCounter, incrementCounter } =
  basketSlice.actions;

export default basketSlice.reducer;
