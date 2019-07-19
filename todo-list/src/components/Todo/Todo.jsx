import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Todo = ({ onClick, completed, id, text, deleteTodo }) => (
  <div className='todo'>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <span className='deleteTodo' onClick={(id) => deleteTodo(id)}>
      X
    </span>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Todo;
