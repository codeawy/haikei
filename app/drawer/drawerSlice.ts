import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type DrawerState = {
  openDimensionsDrawer: boolean;
};

const initialState: DrawerState = {
  openDimensionsDrawer: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleOpenDrawerAction: state => {
      state.openDimensionsDrawer = !state.openDimensionsDrawer;
    },
  },
});
export const { toggleOpenDrawerAction } = drawerSlice.actions;

export const selectDrawer = ({ drawer }: RootState) => drawer;

export default drawerSlice.reducer;
