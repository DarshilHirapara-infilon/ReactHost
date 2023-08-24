import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postLoginData = createAsyncThunk("postLoginData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      "X-FakeAPI-Action": "login",
    },
  });
  return response.json();
});

const loginTokenSlice = createSlice({
  name: "logintoken",
  initialState: {
    isLoading: true,
    isError: false,
    token: null,
    // data: null,
    setEmail: null,
    setPassword: false,
  },
  reducers: {
    ChangeEmail: (state, action) => {
      state.setEmail = action.payload;
    },
    ChangePassword: (state, action) => {
      state.setPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLoginData.pending, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(postLoginData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      // state.data = action.payload;
      // localStorage.setItem(
      //   "setEmail,setPassword",
      //   JSON.stringify(action.payload)
      // );
    });
    builder.addCase(postLoginData.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });
  },
});
export const { ChangeEmail, ChangePassword } = loginTokenSlice.actions;
export default loginTokenSlice.reducer;
