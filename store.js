import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// Reducers

export const newJoke = (state = {}, action) => {
  switch(action.type) {
  case 'RANDOM_JOKE':
    return { currentJoke: action.joke };
  case 'NERDY_JOKE':
    return { currentJoke: action.joke };
  case 'EXPLICIT_JOKE':
    return { currentJoke: action.joke };
  default:
    return state;
  }
};

// Actions

export const fetchRandomJoke = () => async dispatch => {
  const res = await fetch('http://api.icndb.com/jokes/random/?escape=javascript');
  const joke = await res.json();

  dispatch({type: 'RANDOM_JOKE', joke: joke.value.joke });
};

export const fetchNerdyJoke = () => async dispatch => {
  const res = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
  const joke = await res.json();

  dispatch({type: 'NERDY_JOKE', joke: joke.value.joke });
};

export const fetchExplicitJoke = () => async dispatch => {
  const res = await fetch('http://api.icndb.com/jokes/random?limitTo=[explicit]');
  const joke = await res.json();

  dispatch({type: 'EXPLICIT_JOKE', joke: joke.value.joke });
};

export const Store = (initialState = { }) => {
  return createStore(newJoke, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
