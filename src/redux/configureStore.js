import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { handleBookRed } from './books/books';
import { checkStatusRed } from './Categories/categories';

const allReducers = combineReducers({
  book: handleBookRed,
  status: checkStatusRed,
});

const store = configureStore({ reducer: allReducers });

export default store;
