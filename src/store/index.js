import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import bookingSlice from "./bookingSlice";

export const store = configureStore({
  reducer: {
    homeSlice,
    bookingSlice,
  },
});
