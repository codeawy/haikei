import { configureStore } from "@reduxjs/toolkit";
import shapeSlice from "./features/shapeSlice";

export const store = configureStore({
  reducer: {
    shape: shapeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
