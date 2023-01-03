import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sortType: {
    name: "популярности",
    sort: "rating",
  },
  currentPage: 1,
  searchValue: "",
  isOpened: false,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setIsOpened: (state, action) => {
      state.isOpened = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setSearchValue,
  setIsOpened,
} = filterSlice.actions;

export default filterSlice.reducer;
