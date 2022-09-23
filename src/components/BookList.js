import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/books/books';
import AddBooks from './AddBook';
import Book from './Book';

const BookList = () => {
  const bookObj = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);
  return (
    <div className="book-container">
      {bookObj.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <hr className="break" />
      <AddBooks />
    </div>
  );
};
export default BookList;
