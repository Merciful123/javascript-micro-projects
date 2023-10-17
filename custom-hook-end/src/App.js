import React from "react";
import FormPanel from "./components/FormPanel";
import PhoneLogin from "./components/PhoneLogin";
import useResponsive from "./hooks/useResponsive";

const App = () => {
  const {size} = useResponsive();
  return (
    <div
      className={
        ["sm", "xs"].includes(size) ? "container vertical" : "container"
      }
    >
      <div className="cover" />
      <FormPanel />
      {["sm", "xs"].includes(size) ? <PhoneLogin /> : null}
    </div>
  );
};

export default App;
