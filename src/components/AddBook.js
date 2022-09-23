import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddnewBook } from '../redux/books/books';

const inputStyle = {
  padding: '10px',
  width: '28.5rem',
  border: '1px solid #e8e8e8',
  marginRight: '20px',
};

const form = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
};
const AddBooks = () => {
  const dispatch = useDispatch();
  const id = uuidv4();
  const DisplayBook = (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    if (title !== '' && author !== '') {
      dispatch(AddnewBook(id, title, author));
    }
  };

  return (
    <>
      <form>
        <label htmlFor="temp-id">ADD NEW BOOK</label>
        <div style={form}>
          <input
            id="temp-id"
            type="text"
            name="title"
            required
            placeholder="Book title"
            style={inputStyle}
            className="title"
          />
          <input
            type="text"
            name="author"
            required
            placeholder="Author"
            style={inputStyle}
            className="author"
          />
          <button
            style={{
              color: '#fff', border: 'none', padding: '0 30px', background: '#0290FF', borderRadius: '5px', fontWeight: '600', cursor: 'pointer',
            }}
            type="button"
            onClick={DisplayBook}
          >
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};
export default AddBooks;
