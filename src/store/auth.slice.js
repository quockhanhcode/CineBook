import { createSlice } from "@reduxjs/toolkit";

const userLocal = localStorage.getItem("user");

const initialState = {
  user: userLocal ? JSON.parse(userLocal) : null,
  movieID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    getMovieByID: (state, action) => {
      state.movieID = action.payload;
    },
  },
});
export const { setUser, clearUser, getMovieByID } = authSlice.actions;
export default authSlice.reducer;
