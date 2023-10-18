import React, { useState } from "react";
import Photos from "./components/Photos";
import Posts from "./components/Posts";

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
            <Photos />
            <Posts />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
