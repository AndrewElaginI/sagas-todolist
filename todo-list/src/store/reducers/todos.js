import { FETCH_TODOS } from '../actions/types';

const initialState = {
  todos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    default:
      return state;
  }
};

export default todos;
