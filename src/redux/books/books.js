//adding actions type names
const ADD_BOOK = 'BOOKSTORE-REACT/books/ADD_BOOK'
const REMOVE_BOOK = 'BOOKSTORE-REACT/books/REMOVE_BOOK'

// set initialState = []
const InitialState = [];

// add reducers
const reducers = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        
      }
  }
}

// add action creators
// action creator for adding a book
const AddBook = (book) = ({
    type: ADD_BOOK,
    book
  })

// action creator for adding a book
const RemoveBook = (bookId) = ({
    type: REMOVE_BOOK,
    bookId
  })