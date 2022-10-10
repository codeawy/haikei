import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./drawer/drawerSlice";
import blobSlice from "./features/blobSlice";
import shapeSlice from "./features/shapeSlice";

export const store = configureStore({
  reducer: {
    shape: shapeSlice,
    drawer: drawerSlice,
    blob: blobSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
