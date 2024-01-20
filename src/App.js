/** @format */

import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

const dummyData = [
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
  { id: 3, content: "JS" },
  { id: 4, content: "REACT" },
];
function App() {
  return (
    <div className="App">
      <div className="listContiner">
        <Form />
      </div>

      <div className="listContiner">
        <TodoList data={dummyData} />
      </div>
    </div>
  );
}

export default App;
