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
    
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </div>
  );
}

export default App;
