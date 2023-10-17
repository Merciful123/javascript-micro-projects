import React, {useContext} from "react";
import StatsCtx from "./ctx/StatsCtx";

const Stats = () => {
  const {aqi, aqText} = useContext(StatsCtx);
  return (
    <div className="stats">
      <div className="air-quality-ring">
        <h5 className="aq-title">AIR QUALITY</h5>
        <h1 className="aq-num">{aqi}</h1>
        <h4 className="aq-quality">{aqText}</h4>
      </div>
    </div>
  );
};

export default Stats;
