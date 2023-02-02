import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
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

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


