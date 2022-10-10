import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type BlobState = {
  isSolid: boolean;
};

const initialState: BlobState = {
  isSolid: true,
};

export const blobSlice = createSlice({
  name: "blob",
  initialState,
  reducers: {
    selectBlobVariant: (state, { payload }: PayloadAction<boolean>) => {
      state.isSolid = payload;
    },
  },
});

export const { selectBlobVariant } = blobSlice.actions;
export const selectBlob = ({ blob }: RootState) => blob;

export default blobSlice.reducer;
