import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import itemsReducer from "./slices/itemsSlice";


export const store = configureStore({
  reducer: {
    filterReducer,
    itemsReducer
  },
});
