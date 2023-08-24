import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const paginationData = createAsyncThunk("paginationData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const scrollPaginationSlice = createSlice({
  name: "scrolldata",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
    currentPage: 1,
    itemPrePage: 10,
    // hasMore: true,
  },
  reducers: {
    CurrentPage: (state, action) => {
      return {
        currentPage: state.currentPage + 1,
        itemPrePage: state.itemPrePage + 10,
        data: state.data,
      };
    },

    // HasMore: (state, action) => {
    //   state.hasMore = [...state.data];
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(paginationData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(paginationData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...action.payload];
    });
    builder.addCase(paginationData.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const { CurrentPage, IsLoading, HasMore } =
  scrollPaginationSlice.actions;

export default scrollPaginationSlice.reducer;
