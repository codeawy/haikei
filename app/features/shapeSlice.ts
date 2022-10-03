import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type ShapeState = {
  selectedShape: string;
};

const initialState: ShapeState = {
  selectedShape: "blob",
};

export const shapeSlice = createSlice({
  name: "shape",
  initialState,
  reducers: {
    selectShapeAction: (state, action: PayloadAction<string>) => {
      state.selectedShape = action.payload;
    },
  },
});
export const { selectShapeAction } = shapeSlice.actions;

export const selectShape = ({ shape }: RootState) => shape.selectedShape;

export default shapeSlice.reducer;
