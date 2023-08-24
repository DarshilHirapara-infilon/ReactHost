import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      localStorage.setItem("isOpenpage", JSON.stringify(action.payload));
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

// export const { setTotalItem, setCurrentPage, setItemPrePage } =
//   todoSlice.actions;

export default todoSlice.reducer;
