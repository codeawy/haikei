import { useRef } from "react";
import BlobCanvasDrawer from "components/drawer/BlobCanvasDrawer";
import BlobShape from "components/shapes/BlobShape";
import AppSideStack from "../components/AppSideStack";
import StacksWrapper from "../components/stack";
import { selectDrawer, toggleOpenDrawerAction } from "app/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectShape } from "app/features/shapeSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { openDimensionsDrawer } = useAppSelector(selectDrawer);
  const {
    selectedShapeDimensions: { width, height },
  } = useAppSelector(selectShape);

  const canvasDrawerRef = useRef();

  const onCloseDrawer = () => {
    dispatch(toggleOpenDrawerAction());
  };

  return (
    <div className="app-wrapper">
      <AppSideStack />
      <div className="p-5 flex flex-col items-center justify-center">
        <BlobShape width={width} height={height} />
      </div>
      <StacksWrapper canvasDrawerRef={canvasDrawerRef} />

      <BlobCanvasDrawer
        isOpen={openDimensionsDrawer}
        onClose={onCloseDrawer}
        btnRef={canvasDrawerRef}
      />
    </div>
  );
}

/**
 * Every single shape's dimensions will change automatically after select a dimensions
 * right side bar (canvas) is sticky
 * make a slice for each shape such as blobSlice, waveSlice, ...etc
 */
