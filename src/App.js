import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import AddBooks from './components/BookContainer';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import Category from './components/Category';

const App = () => (
  <div className="wrapper">
    <NavBar />
    <Routes>
      <Route path="/" exact element={<BookList />} />
      <Route path="/category" exact element={<Category />} />
    </Routes>
  </div>
);

export default App;
