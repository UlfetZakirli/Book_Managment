import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import Book from './Book'

const ListBook = () => {
    const { books, setBooks } = useContext(BookContext)

    const handleRemoveBook = (id) => {
        const deletedBook = books.filter((book) => book.id !== id)
        setBooks(deletedBook)
    }

    return (
        <div className='listBook'>
            {books.length ? books.map((book) => (
                <Book handleRemoveBook={handleRemoveBook} book={book} key={book.id} />
            )) : <p className='noData'>No books avaliable, Please enter some books!</p>
            }
        </div>
    )
}

export default ListBook