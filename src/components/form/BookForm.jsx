import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const BookForm = ({ book, handleSubmit }) => {
    const [bookState, setBookState] = useState({
        name: book ? book.name : '',
        author: book ? book.author : '',
        price: book ? book.price : ''
    })

    const handleChange = (e) => {
        setBookState({
            ...bookState, [e.target.name]: e.target.value
        })

    }


    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit({
            ...bookState,
            id: uuidv4(),
            date: new Date()
        })
        setBookState({
            name: '',
            author: '',
            price: ''
        })
    }

    const renderInputField = (label, placeholder, name) => (
        <div className='inputField'>
            <label>{label}</label>
            <input value={bookState[name]} onChange={handleChange} type="text" placeholder={placeholder} name={name} />
        </div>
    )

    const disabledSubmit = !bookState.name || !bookState.author || !bookState.price

    return (
        <form className='form' onSubmit={onSubmit}>
            {renderInputField("Book Name", 'Enter name of book', 'name')}
            {renderInputField("Book Author", 'Enter name of author', 'author')}
            {renderInputField("Book Price", 'Enter price of book', 'price')}
            <button type='submit' className='btnForm' disabled={disabledSubmit}>{book ? "Update" : 'Submit'}</button>
        </form>
    )
}

export default BookForm