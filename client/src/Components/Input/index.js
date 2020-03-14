import React from "react";


function Input() {
  return (
      <div className = "container">
    <div className = "input-group mb-3">
        <div className = "input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Start</span>
        </div>
        <input type="text" class="form-control col-4"  aria-label="Username" aria-describedby="basic-addon1"></input>
        <div className = "input-group-prepend">
        <span class="input-group-text" id="basic-addon1">End</span>
        </div>
        <input type="text" class="form-control col-4"  aria-label="Username" aria-describedby="basic-addon1"></input>
    </div>
      </div>
  );
}

export default Input;