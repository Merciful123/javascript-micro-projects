import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import slowLoad from "./slowLoad";
import Spinner from "./components/Spinner";
// import Photos from "./components/Photos";
// import Posts from "./components/Posts";
const Photos = lazy(() => slowLoad(import("./components/Photos"), 1600));
const Posts = lazy(() => slowLoad(import("./components/Posts"), 800));

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
              <Suspense fallback={<Spinner />}>
                <Photos />
              </Suspense>
            </Route>
            <Route path="/posts">
              <Suspense fallback={<Spinner />}>
                <Posts />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
