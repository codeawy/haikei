import { useTheme } from "next-themes";
import AppSideStack from "../components/AppSideStack";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <AppSideStack />
      {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>toggle</button> */}
    </div>
  );
}
