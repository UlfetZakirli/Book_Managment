import React from 'react'
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
    const { id, name, author, price, date } = book
    const navigate = useNavigate()
    return (
        <div className='book'>
            <h2>{name}</h2>
            <div className="bookDetail">
                <p>Author: {author}</p>
                <p>Price: {price}</p>
                <p>Date: {new Date(date).toDateString()}</p>
            </div>
            <div className='buttons'>
                <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Book