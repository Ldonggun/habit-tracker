import React, { PureComponent } from 'react';

class Input extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = e => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };
  render() {
    console.log('inputForm');
    return (
      <form
        ref={this.formRef}
        className='input-container'
        onSubmit={this.onSubmit}
      >
        <input
          ref={this.inputRef}
          type='text'
          className='add-input'
          placeholder='Habit'
        />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default Input;
