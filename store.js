import { createStore, applyMiddleware, combineReducers } from 'redux';
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

export const watsonResponse = (state = {}, action) => {
  switch(action.type) {
  case 'POST_MESSAGE':
    return { response: { message: action.message, intent: action.intent }};
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  watsonResponse,
  newJoke,
});

// Actions

export const message = ({message, intent}) => ({
  type: 'POST_MESSAGE',
  message,
  intent
});

export const postMessage = input => async dispatch => {
  const res = await fetch('/api/v1/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: input})});
  const reply = await res.json();

  dispatch(message(reply));
};

export const randomJoke = joke => ({
  type: 'RANDOM_JOKE',
  joke
});

export const fetchRandomJoke = () => async dispatch => {
  const res = await fetch('http://api.icndb.com/jokes/random/?escape=javascript');
  const joke = await res.json();

  dispatch(randomJoke(joke.value.joke));
};

export const nerdyJoke = joke => ({
  type: 'NERDY_JOKE',
  joke
});

export const fetchNerdyJoke = () => async dispatch => {
  const res = await fetch('http://api.icndb.com/jokes/random?escape=javascript&limitTo=[nerdy]');
  const joke = await res.json();

  dispatch(nerdyJoke(joke.value.joke));
};

export const explicitJoke = joke => ({
  type: 'EXPLICIT_JOKE',
  joke
});

export const fetchExplicitJoke = () => async dispatch => {
  const res = await fetch('http://api.icndb.com/jokes/random?escape=javascript&limitTo=[explicit]');
  const joke = await res.json();

  dispatch(explicitJoke(joke.value.joke));
};

export const Store = (initialState = { }) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
