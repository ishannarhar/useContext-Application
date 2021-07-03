import "./styles.css";
import { useState } from "react";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import themeCtxt from "./themeCtxt";
export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <themeCtxt.Provider value={{ theme, setTheme }}>
        <Header />
        <Hero />
      </themeCtxt.Provider>
    </div>
  );
}
