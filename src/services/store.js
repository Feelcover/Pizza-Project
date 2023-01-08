import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import itemsReducer from "./slices/itemsSlice";
import basketSlice from "./slices/basketSlice";


export const store = configureStore({
  reducer: {
    filterReducer,
    basketSlice,
    itemsReducer
  },
});
