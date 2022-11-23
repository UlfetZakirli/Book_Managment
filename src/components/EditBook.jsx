import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookForm from './form/BookForm'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { books, setBooks } = useContext(BookContext)
  const bookToEdit = books.filter(book => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBook = books.filter(book => book.id !== id);
    setBooks([book, ...filteredBook])
    navigate('/')
  }
  return (
    <div className='addForm'>
      <BookForm book={bookToEdit[0]} handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditBook