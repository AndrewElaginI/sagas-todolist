import {
  put,
  all,
  spawn,
  call,
  takeLatest,
  take,
  select
} from 'redux-saga/effects';
import {
  ADD_TODO,
  SHOW_TODOS,
  FETCH_TODOS,
  TOGGLE_TODO,
  DELETE_TODO
} from '../store/actions/types';

function* fetchTodos() {
  const url = 'http://localhost:4000/todos';
  try {
    const res = yield call(fetch, url);
    const todos = yield call([res, res.json]);
    yield put({ type: FETCH_TODOS, todos });
  } catch (err) {
    console.log(err);
  }
}

function* watchShowTodos() {
  yield takeLatest(SHOW_TODOS, fetchTodos);
}

// Log all actions
function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
  }
}

function* addTodo(todo) {
  const url = 'http://localhost:4000/todos';
  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(todo)
  };
  try {
    console.log('Add todo request', data);
    yield call(fetch, url, data);
    yield put({ type: SHOW_TODOS });
  } catch (error) {
    console.log(error);
  }
}

function* watchAddTodo() {
  yield takeLatest(ADD_TODO, addTodo, ...arguments);
}

function* toggleTodo(todo) {
  const url = `http://localhost:4000/todos/${todo.id}`;
  const data = {
    method: 'PUT'
  };
  try {
    yield call(fetch, url, data);
    yield put({ type: SHOW_TODOS });
  } catch (error) {
    console.log(error);
  }
}

function* watchToggleTodo() {
  yield takeLatest(TOGGLE_TODO, toggleTodo);
}

function* deleteTodo(todo){
  const url = `http://localhost:4000/todos/${todo.id}`;
  const data = {
    method: 'DELETE'
  };
  try {
    yield call(fetch, url, data);
    yield put({ type: SHOW_TODOS });
  } catch (error) {
    console.log(error);
  }
}

function* watchDeleteTodo() {
  yield takeLatest(DELETE_TODO, deleteTodo)
}

export function* rootSaga() {
  const sagas = [watchShowTodos, watchAndLog, watchAddTodo, watchToggleTodo, watchDeleteTodo];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
