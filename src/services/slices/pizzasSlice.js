import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  isLoading: 'pending',
};

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (props) => {
    const { sortType, categoryId, currentPage, searchValue } = props;
    const order = sortType.sort.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sort.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    const res = await axios.get(
      `https://63a57314318b23efa793c24a.mockapi.io/Items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data;
  }
);

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
      state.isLoading = 'pending';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = 'success';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.isLoading = 'error';
    });
  }
});

export const { setPizzas, setIsLoading } = pizzasSlice.actions;

export default pizzasSlice.reducer;
