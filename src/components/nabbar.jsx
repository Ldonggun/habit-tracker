import React, { Component } from 'react';

class Nabbar extends Component {
  render() {
    console.log(this.props);
    let sum = '';

    console.log(sum);
    return (
      <>
        <header className='header'>
          <h1>
            <button className='header-icon'>
              <i className='fab fa-canadian-maple-leaf'></i>
            </button>
            Habit Tracker <span className='habit-count'>2</span>
          </h1>
        </header>
      </>
    );
  }
}

export default Nabbar;
