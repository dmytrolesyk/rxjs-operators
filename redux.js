import Rx from 'rxjs';

const createStore = (reducer, preloadedState) => {
  const eventSource = new Rx.BehaviorSubject(preloadedState);

  const scanned = eventSource
    .scan(reducer)
    .distinctUntilChanged()

  return {
    dispatch(action) {
      eventSource.next(action);
    },
    subscribe(listener) {
      scanned.subscribe(listener);
    }
  }
};

const defaultState = {
  todos: ['Write some code', 'Play video games']
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newState = Object.assign({}, state)
      newState.todos = [ ...state.todos, action.payload ]
      return newState;
    default: 
      return state;
  }
}

const store = createStore(reducer, defaultState);

store.subscribe(console.log)
store.dispatch({ type: 'ADD_TODO', payload: 'Walk the dog' })