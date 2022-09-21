// adding actions type names
const ADD_BOOK = 'BOOKSTORE-REACT/books/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE-REACT/books/REMOVE_BOOK';

// set initialState = []
const InitialState = [
  {
    id: 0,
    title: 'Where we left off',
    author: 'Eze Chisimdi',
  },
  {
    id: 1,
    title: 'The Gods are dead',
    author: 'Mike Bamiloye',
  },
  {
    id: 2,
    title: 'Things Fall Apart',
    author: 'Promise Okechukwu',
  },
];

// add reducers
const handleBookRed = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);
    default: return state;
  }
};

// add action creators
// action creator for adding a book
const AddBook = (book) => ({
  type: ADD_BOOK,
  book,
});

// action creator for adding a book
const RemoveBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export { handleBookRed, RemoveBook, AddBook };
