import { useRef } from "react";
import BlobCanvasDrawer from "components/drawer/BlobCanvasDrawer";
import BlobShape from "components/shapes/BlobShape";
import AppSideStack from "../components/AppSideStack";
import StacksWrapper from "../components/stack";
import { selectDrawer, toggleOpenDrawerAction } from "app/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const { openDimensionsDrawer } = useAppSelector(selectDrawer);
  const canvasDrawerRef = useRef();

  const onCloseDrawer = () => {
    dispatch(toggleOpenDrawerAction());
  };

  return (
    <div className="app-wrapper">
      <AppSideStack />
      <div className="p-5 flex flex-col items-center justify-center">
        <BlobShape width={700} height={500} />
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
