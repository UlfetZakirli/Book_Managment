import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import Book from './Book';

const ListBook = () => {
  const { books, setBooks } = useContext(BookContext)

  return (
    <div className='listBook'>
      {books.length ? books.map((book) => (
        <Book book={book} key={book.id}/>
      )) : <p className='noData'>No books avaliable, Please add some books!</p>
      }
    </div>
  )
}

export default ListBook