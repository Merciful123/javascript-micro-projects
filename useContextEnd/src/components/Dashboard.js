import React, {useContext} from "react";
import User from "../components/User";
import Stats from "../components/Stats";
import ThemeCtx from "./ctx/ThemeCtx";

const Dashboard = () => {
  const {theme} = useContext(ThemeCtx);
  return (
    <div className="dashboard" style={theme}>
      <h1 className="title">Dashboard</h1>
      <User />
      <Stats />
    </div>
  );
};

export default Dashboard;
