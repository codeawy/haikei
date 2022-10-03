import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./drawer/drawerSlice";
import shapeSlice from "./features/shapeSlice";

export const store = configureStore({
  reducer: {
    shape: shapeSlice,
    drawer: drawerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
