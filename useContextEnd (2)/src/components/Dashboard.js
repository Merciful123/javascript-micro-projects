import React from "react";
import User from "../components/User";
import Stats from "../components/Stats";
import ThemeCtx from "./ctx/ThemeCtx";

const Dashboard = () => (
  <ThemeCtx.Consumer>
    {({theme}) => (
      <div className="dashboard" style={theme}>
        <h1 className="title">Dashboard</h1>
        <User />
        <Stats />
      </div>
    )}
  </ThemeCtx.Consumer>
);

export default Dashboard;
