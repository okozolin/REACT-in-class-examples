import React from "react";
import { ThemeContext } from "./context";

const Home = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        return (
          <div className={`home home-${value.theme}`}>
            Home {value.theme}
            <div>
              <button onClick={() => value.setTheme("dark")}>dark theme</button>
              <button onClick={() => value.setTheme("light")}>
                light theme
              </button>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Home;
