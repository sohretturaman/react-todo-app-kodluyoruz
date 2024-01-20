/** @format */

import React, { useState } from "react";
import "./Form.css";

const Form = ({ AddItem }) => {
  const [taksVal, setTaksVal] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (taksVal) {
      AddItem(taksVal);
      setTaksVal("");
    }
  }

  function handleOnChange(event) {
    setTaksVal(event.target.value);
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleOnChange}
          value={taksVal}
          name="taskVal"
          className="input"
          placeholder="Add a new task.."
        />

        <button className="button">Add</button>
      </form>
    </div>
  );
};

export default Form;
