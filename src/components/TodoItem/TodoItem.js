/** @format */

import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div className="todo-item-wrapper">
      <label className="checkbox-label">
      <input type="checkbox" className="styled-checkbox"   />
      </label>
     
      <span className="todo-item"> {props.contents}</span>
    </div>
  );
}

export default TodoItem;
