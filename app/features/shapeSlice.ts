import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface IDimensions {
  width: number;
  height: number;
}

export type ShapeState = {
  selectedShape: string;
  selectedShapeDimensions: IDimensions;
};

const initialState: ShapeState = {
  selectedShape: "blob",
  selectedShapeDimensions: { width: 700, height: 500 },
};

export const shapeSlice = createSlice({
  name: "shape",
  initialState,
  reducers: {
    selectShapeAction: (state, action: PayloadAction<string>) => {
      state.selectedShape = action.payload;
    },
    selectShapeDimensionsAction: (state, action: PayloadAction<IDimensions>) => {
      state.selectedShapeDimensions = action.payload;
    },
  },
});
export const { selectShapeAction, selectShapeDimensionsAction } = shapeSlice.actions;

export const selectShape = ({ shape }: RootState) => shape;

export default shapeSlice.reducer;
