import React from "react";
import StatsCtx from "./ctx/StatsCtx";

const Stats = () => (
  <StatsCtx.Consumer>
    {({aqi, aqText}) => (
      <div className="stats">
        <div className="air-quality-ring">
          <h5 className="aq-title">AIR QUALITY</h5>
          <h1 className="aq-num">{aqi}</h1>
          <h4 className="aq-quality">{aqText}</h4>
        </div>
      </div>
    )}
  </StatsCtx.Consumer>
);
export default Stats;
