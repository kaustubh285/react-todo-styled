import React from "react";

export function App() {
  return (
    <div>
      <div className='form-check'>
        <input type='checkbox' className='form-check-input' id='task1' />
        <label className='form-check-label' htmlFor='task1'>
          Task 1
        </label>
      </div>
      <div className='form-check'>
        <input type='checkbox' className='form-check-input' id='task2' />
        <label className='form-check-label' htmlFor='task2'>
          Task 2
        </label>
      </div>
      <div className='form-check'>
        <input type='checkbox' className='form-check-input' id='task3' />
        <label className='form-check-label' htmlFor='task3'>
          Task 3
        </label>
      </div>
    </div>
  );
}
