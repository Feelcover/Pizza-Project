import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import pizzasReducer from "./slices/pizzasSlice";
import basketReducer from "./slices/basketSlice";


export const store = configureStore({
  reducer: {
    filterReducer,
    basketReducer,
    pizzasReducer,
  },
});
