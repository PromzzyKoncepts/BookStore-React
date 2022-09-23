import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { handleBookRed } from './books/books';
import { checkStatusRed } from './Categories/categories';

const allReducers = combineReducers({
  book: handleBookRed,
  status: checkStatusRed,
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);

export default store;
