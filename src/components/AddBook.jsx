import React, { useContext } from 'react'
import BookForm from './form/BookForm'
import { BookContext } from './../context/BookContext';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const navigate = useNavigate()
    const { books, setBooks } = useContext(BookContext)

    const handleOnSubmit = (book) => {
        setBooks([book, ...books])
        navigate('/')
        console.log(book);
    }

    return (
        <BookForm handleSubmit={handleOnSubmit} />
    )
}

export default AddBook