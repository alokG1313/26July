import React, { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import ThemeChild from "./ThemeChild";

const ThemeSelector = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <select name="" id="" onChange={(e) => setTheme(e.target.value)}>
        <option value="dark">dark</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="light">light</option>
      </select>
      <themeContext.Provider value={theme}>
        <ThemeChild />
      </themeContext.Provider>
    </>
  );
};

export default ThemeSelector;
