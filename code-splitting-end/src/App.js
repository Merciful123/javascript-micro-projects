import React, { useState, lazy, Suspense } from "react";
import slowLoad from "./slowLoad";
import Spinner from "./components/Spinner";
// import Photos from "./components/Photos";
// import Posts from "./components/Posts";
const Photos = lazy(() => slowLoad(import("./components/Photos"), 1500));
const Posts = lazy(() => slowLoad(import("./components/Posts"), 800));

const App = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <button onClick={() => setShowContent(true)}>Show Content</button>
        <button onClick={() => setShowContent(false)}>Hide Content</button>
      </div>
      <div className="content">
        {showContent ? (
          <>
            <Suspense fallback={<Spinner />}>
              <Photos />
              <Posts />
            </Suspense>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
