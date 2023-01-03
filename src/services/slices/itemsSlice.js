import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems:(state, action) => {
      state.items = action.payload;
    },
  },
});

export const {items} = itemsSlice.actions;

export default itemsSlice.reducer;

