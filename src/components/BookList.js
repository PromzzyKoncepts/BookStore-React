import React from 'react'
import AddBooks from './AddBook'
import Book from './Book'

const BookObj = {
  id: 1,
  title: 'The Gods are dead',
  author: 'Promise Okechukwu'
}


const BookList = () => (
  <div className='book-container'>
    <Book title={BookObj.title}
      author={BookObj.author} />
    <hr className='break'></hr>
    <AddBooks />
  </div>
)
export default BookList