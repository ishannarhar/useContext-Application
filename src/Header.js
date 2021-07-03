import { useContext } from "react";
import themeCtxt from "./themeCtxt";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  const { theme } = useContext(themeCtxt);
  return (
    <header>
      <span>My App {theme}</span>
      <ThemeToggle />
    </header>
  );
}
