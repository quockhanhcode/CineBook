import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import bookingSlice from "./bookingSlice";
import authSlice from "./auth.slice";

export const store = configureStore({
  reducer: {
    homeSlice,
    bookingSlice,
    authSlice,
  },
});
