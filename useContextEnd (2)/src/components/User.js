import React from "react";
import UserCtx from "./ctx/UserCtx";

const User = () => (
  <UserCtx.Consumer>
    {({name, lastLogged}) => (
      <>
        <div className="user">Welcome back, {name}</div>
        <div className="last-logged">
          Last logged in: {lastLogged.toUTCString()}
        </div>
      </>
    )}
  </UserCtx.Consumer>
);

export default User;
