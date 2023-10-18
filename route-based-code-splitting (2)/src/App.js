import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Photos from "./components/Photos";
import Posts from "./components/Posts";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/">
            <div className="btn">Home</div>
          </Link>
          <Link to="/photos">
            <div className="btn">Photos</div>
          </Link>
          <Link to="/posts">
            <div className="btn">Posts</div>
          </Link>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <h1>This is Home!</h1>
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
