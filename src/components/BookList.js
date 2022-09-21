import React from 'react';
import { useSelector } from 'react-redux';
import AddBooks from './AddBook';
import Book from './Book';

const BookList = () => {
  const bookObj = useSelector((state) => state.book);
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
