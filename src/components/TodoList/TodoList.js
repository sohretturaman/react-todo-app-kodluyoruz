/** @format */

import React from "react";

import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  console.log('props.data.length', props.data.length);
  return (
    <div>
      <ul className="list-wrapper">
        {props.data.lenghth === 0 && <p>No todos</p>}
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
