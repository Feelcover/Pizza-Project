import { createSlice } from "@reduxjs/toolkit";
import { SortType } from "../../utils/types";
import { RootState } from "../store";

interface FilterInitialState {
  categoryId: number;
  sortType: SortType;
  currentPage: number;
  searchValue: string;
  isOpened: boolean;
  value: string;
}

const initialState: FilterInitialState = {
  categoryId: 0,
  sortType: {
    name: "популярности",
    sort: "rating",
  },
  currentPage: 1,
  searchValue: "",
  isOpened: false,
  value: "",
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
    setUrlFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortProp;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const filterSelector = (state: RootState) => state.filterReducer;

export const {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setSearchValue,
  setIsOpened,
  setUrlFilters,
  setValue,
} = filterSlice.actions;

export default filterSlice.reducer;
