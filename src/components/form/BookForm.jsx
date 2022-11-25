import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"

const BookForm = ({ book, handleSubmit }) => {
    const [bookState, setBookState] = useState({
        name: book ? book.name : '',
        author: book ? book.author : '',
        price: book ? book.price : ''
    })
    console.log(bookState);

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit({
            ...bookState,
            id: uuidv4(),
            date: new Date()
        })
        setBookState({ name: '', author: '', price: '' })

    }

    const handleChange = (e) => {
        setBookState({
            ...bookState,
            [e.target.name]: e.target.value
        })

    }

    const renderInputField = (label, placeholder, name) => (
        <div className='inputField'>
            <label>{label}</label>
            <input value={bookState[name]} onChange={handleChange} type="text" placeholder={placeholder} name={name} />
        </div>
    )

    const handleDisabled = bookState.name && bookState.author && bookState.price
    return (
        <form className='form' onSubmit={onSubmit}>
            {renderInputField('Book Name', 'Enter a book...', 'name')}
            {renderInputField('Author Name', 'Enter an author...', 'author')}
            {renderInputField('Book Price', 'Enter price of book...', 'price')}
            <button className='btnForm' type='submit' disabled={!handleDisabled}>{book ? "Update" : 'Submit'}</button>
        </form>
    )
}

export default BookForm