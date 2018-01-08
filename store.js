import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// Reducers

export const randomJoke = (state = {}, action) => {
  switch(action.type) {
  case 'RANDOM_JOKE':
    return { randomJoke: action.joke };
  default:
    return state;
  }
};

// Actions

export const fetchRandomJoke = () => async dispatch => {
  const res = await fetch('http://api.icndb.com/jokes/random/?escape=javascript');
  const joke = await res.json();

  dispatch({type: 'RANDOM_JOKE', joke: joke.value.joke })
};

export const storeRandomJoke = joke => ({
  type: 'RANDOM_JOKE',
  joke
});

export const Store = (initialState = { }) => {
  return createStore(randomJoke, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
