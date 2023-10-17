import React, {useState} from "react";
import ThemePicker from "./components/ThemePicker";
import Dashboard from "./components/Dashboard";
import ThemeCtx from "./components/ctx/ThemeCtx";
import UserCtx from "./components/ctx/UserCtx";
import StatsCtx from "./components/ctx/StatsCtx";

const userData = {
  name: "Vincent K",
  lastLogged: new Date(2019, 11, 5)
};

const statsData = {
  aqi: 120,
  aqText: "Poor air quality. You may face breathing difficulties!"
};

const App = () => {
  const [theme, setTheme] = useState({
    backgroundColor: "rgba(255,255,255)",
    color: "rgb(0,0,0,0.95)"
  });
  return (
    <div className="container">
      <ThemePicker onSetTheme={ruleset => setTheme(ruleset)} />
      <UserCtx.Provider value={userData}>
        <ThemeCtx.Provider value={{theme}}>
          <StatsCtx.Provider value={statsData}>
            <Dashboard />
          </StatsCtx.Provider>
        </ThemeCtx.Provider>
      </UserCtx.Provider>
    </div>
  );
};

export default App;
