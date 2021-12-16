import React, { memo } from 'react';

const Input = memo(props => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = e => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // inputRef.current.value = '';
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className='input-container' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholder='Habit'
      />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default Input;
