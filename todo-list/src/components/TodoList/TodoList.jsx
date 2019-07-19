import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

const TodoList = ({ todos, getTodos, toggleTodo, deleteTodo }) => {
  useEffect(() => {
    getTodos();
  }, []);
  console.log('Todos form back', todos)
  let todoList = todos.todos.map(todo => (
    <Todo
      key={todo.id}
      {...todo}
      onClick={() => toggleTodo(todo.id)}
      deleteTodo={() => deleteTodo(todo.id)}
    />
  ));
  console.log('Todo LIST', todoList)
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  getTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
