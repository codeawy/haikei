import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h1 className="text-3xl text-pink-500" style={{ backgroundColor: "teal" }}>
        Welcome to Your App
      </h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>toggle</button>
    </div>
  );
}
