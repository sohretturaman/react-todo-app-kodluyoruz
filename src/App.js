/** @format */

import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

const initialVal = [{ id: "", content: "first task" }];
function App() {
  const [data, setData] = useState(initialVal);

  const HandleAddItem = (newItem) => {
    console.log(newItem);
    setData((current) => [
      ...current,
      { id: Math.random(2), content: newItem },
    ]);
  };

  console.log("my data", data);
  return (
    <div className="App">
      <div className="listContiner">
        <Form AddItem={HandleAddItem} />
      </div>

      <div className="listContiner">
        <TodoList data={data} />
      </div>
    </div>
  );
}

export default App;
