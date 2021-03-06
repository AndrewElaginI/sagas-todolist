import React from 'react';
import '../../assets/styles/app.css';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default App;
