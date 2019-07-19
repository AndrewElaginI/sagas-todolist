import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ADD_TODO } from '../../store/actions/types';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('1');
  const handleText = event => {
    setText(event.target.value);
  };
  const handleCategory = event => {
    setCategory(event.target.value);
  };
  const todo = {
    text,
    category
  };
  console.log(todo)
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setText('');
          setCategory('1')
          addTodo(todo);
        }}
        method='POST'
      >
        <input
          placeholder='What needs to be done?'
          required
          value={text}
          onChange={handleText}
        />
        <select value={category} onChange={handleCategory}>
          <option value='1'>Job</option>
          <option value='2'>Home</option>
        </select>
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch({ type: ADD_TODO, todo })
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
