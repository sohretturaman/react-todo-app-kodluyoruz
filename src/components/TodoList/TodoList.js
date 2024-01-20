/** @format */

import React from "react";

import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  return (
    <div>
      <ul className="list-wrapper">
        {props.data.map((item, index) => (
          <li className="list-item" key={item.id}>
            <TodoItem contents={item.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
