import { connect } from 'react-redux';
import {
  SHOW_TODOS,
  TOGGLE_TODO,
  DELETE_TODO
} from '../../store/actions/types';
import TodoList from '../../components/TodoList';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch({ type: SHOW_TODOS }),
  toggleTodo: id => dispatch({ type: TOGGLE_TODO, id }),
  deleteTodo: id => dispatch({ type: DELETE_TODO, id })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
