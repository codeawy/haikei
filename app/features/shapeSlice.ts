import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface IDimensions {
  width: number | string;
  height: number | string;
  aspectRatio: string;
}

export type ShapeState = {
  selectedShape: string;
  selectedShapeDimensions: IDimensions;
};

const initialState: ShapeState = {
  selectedShape: "blob",
  selectedShapeDimensions: { width: 900, height: 450, aspectRatio: "2:1" },
};

export const shapeSlice = createSlice({
  name: "shape",
  initialState,
  reducers: {
    selectShapeAction: (state, { payload }: PayloadAction<string>) => {
      state.selectedShape = payload;
    },
    selectShapeDimensionsAction: (state, { payload }: PayloadAction<IDimensions>) => {
      state.selectedShapeDimensions = payload;
    },
  },
});
export const { selectShapeAction, selectShapeDimensionsAction } = shapeSlice.actions;

export const selectShape = ({ shape }: RootState) => shape;

export default shapeSlice.reducer;
