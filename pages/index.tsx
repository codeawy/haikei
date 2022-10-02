import AppSideStack from "../components/AppSideStack";
import StacksWrapper from "../components/stack";

export default function Home() {
  return (
    <div className="app-wrapper">
      <AppSideStack />
      <div className="p-5">HI NAGA!</div>
      <StacksWrapper />
    </div>
  );
}
