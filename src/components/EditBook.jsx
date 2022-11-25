import React, { useContext } from 'react'
import BookForm from './form/BookForm'
import { BookContext } from './../context/BookContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { books, setBooks } = useContext(BookContext)
    const editToBook = books.filter((book) => book.id === id)

    const handleOnSubmit = (book) => {
        const filteredBook = books.filter((book) => book.id !== id)
        setBooks([book, ...filteredBook])
        navigate('/')
        console.log(book);
    }

    return (
        <BookForm book={editToBook[0]} handleSubmit={handleOnSubmit} />
    )
}

export default EditBook