import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { handleBookRed } from './books/books';
import checkStatus from './categories/categories';

const allReducers = combineReducers({
  book: handleBookRed,
  status: checkStatus,
});

const store = configureStore({ reducer: allReducers });

export default store;
