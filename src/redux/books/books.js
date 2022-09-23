import axios from 'axios';

const appId = 'ei3pYzTw0ELsYPNXHk8a';
const Url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/`;

// adding actions type names
const ADD_BOOK = 'BOOKSTORE-REACT/books/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE-REACT/books/REMOVE_BOOK';
const GET_BOOK = 'BOOKSTORE-REACT/books/GET_BOOK';

const AddnewBook = (id, titName, authName) => (dispatch) => {
  axios.post(Url, {
    item_id: id,
    title: titName,
    author: authName,
    category: 'Action',
  }).then(() => {
    dispatch({
      type: ADD_BOOK,
      book: {
        id, title: titName, author: authName,
      },
    });
  });
};

const getBook = () => (dispatch) => {
  axios.get(Url).then((res) => {
    const books = Object.keys(res.data).map((key) => {
      const book = res.data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch({ type: GET_BOOK, payload: books });
  });
};

// action creator for adding a book
const RemoveBook = (id) => (dispatch) => {
  const urlId = `${Url}${id}`;
  axios.delete(urlId, {
    item_id: id,
  }).then(() => {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  });
};

// set initialState = []
const InitialState = [];

// add reducers
const handleBookRed = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.book.id,
          title: action.book.title,
          author: action.book.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOK:
      return [...action.payload];
    default: return state;
  }
};

export {
  handleBookRed, AddnewBook, getBook, RemoveBook,
};
