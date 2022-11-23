import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const value = { books, setBooks }
    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider