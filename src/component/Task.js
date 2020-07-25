import React from "react";

export default function Task(props) {
  const lableStyle = {
    paddingLeft: "1rem",
  };

  return (
    <div className='form-check todo-item'>
      <input
        type='checkbox'
        className='form-check-input'
        id='task1'
        checked={props.task.completed}
      />
      <label className='form-check-label' style={lableStyle} htmlFor='task1'>
        {props.task.text}
      </label>
    </div>
  );
}
