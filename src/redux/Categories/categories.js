const STATUS = 'BOOKSTORE-REACT/category/STATUS';
const ADD_CATEGORY = 'BOOKSTORE-REACT/categories/ADD_CATEGORY';
const REMOVE_CATEGORY = 'BOOKSTORE-REACT/categories/REMOVE_CATEGORY';


// Reducer Function
const checkStatus = (state = false, action) => {
  switch (action.type) {
    case STATUS:
      return !state;
    case ADD_CATEGORY:
      return [...state, action.book];

    case REMOVE_CATEGORY:
      return state.filter((book) => book !== action.bookId);

    default:
      return state;
  }
};

// Add A Book Category action

export const addBook = (book) => ({
  type: 'ADD_CATEGORY',
  book,
});

// Remove a book Category action

export const removeBook = (bookId) => ({
  type: 'REMOVE_CATEGORY',
  bookId,
});

export default checkStatus;