import React from 'react';

const App = () => {
  return (
    <div className="container">
      <div className="stats">
        200, 100
        <button id="clear-btn">Clear</button>
      </div>
      <div className="canvas">
        <div className="dot" style={{ left: 200, top: 100 }} />
      </div>
    </div>
  );
};

export default App;
