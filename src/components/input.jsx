import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <>
        <div className='input-container'>
          <input value='Habit' />
          <button>Add</button>
        </div>
      </>
    );
  }
}

export default Input;
