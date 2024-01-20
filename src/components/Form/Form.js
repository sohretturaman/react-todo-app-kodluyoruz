/** @format */

import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <input type="text" 
         onChange={(e) => console.log(e.target.value)}
       
        className="input"  placeholder="Add a new task.."/>
   
      <button className="button">
         Add 
      </button>

    </form>
    </div>
  );
};

export default Form;
