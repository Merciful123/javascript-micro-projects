import React, {createRef, useState} from "react";
import ListApp from "./components/ListApp";

const App = () => {
  const inputBox = createRef();
  const [task, setTask] = useState("");
  return (
    <div className="main">
      <input
        type="text"
        ref={inputBox}
        placeholder="Type and press enter..."
        onKeyUp={e => {
          if (e.keyCode === 13) {
            setTask(e.target.value);
            inputBox.current.value = "";
          }
        }}
      />
      <ListApp task={task}>
        {({list, remove}) => (
          <div className="list-app">
            {list.length > 0
              ? list.map(({id, task}) => (
                  <div className="list-item" key={id}>
                    <span>{task}</span>
                    <button onClick={() => remove(id)}>X</button>
                  </div>
                ))
              : null}
          </div>
        )}
      </ListApp>
    </div>
  );
};

export default App;
