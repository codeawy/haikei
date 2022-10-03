import BlobShape from "components/shapes/BlobShape";
import { useState } from "react";
import AppSideStack from "../components/AppSideStack";
import StacksWrapper from "../components/stack";

export default function Home() {
  // const [selectedShape, setSelectedShape] = useState("blob");

  return (
    <div className="app-wrapper">
      <AppSideStack />
      <div className="p-5 flex flex-col items-center justify-center bg-blob">
        <BlobShape width={"95%"} height={"95%"} />
      </div>
      <StacksWrapper />
    </div>
  );
}
