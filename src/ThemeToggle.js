import Switch from "react-switch";
import { useContext } from "react";
import themeCtxt from "./themeCtxt";
export default function ThemeToggle() {
  const { theme, setTheme } = useContext(themeCtxt);
  function changeHandler() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={changeHandler}
        checked={theme === "light"}
      />
    </div>
  );
}
