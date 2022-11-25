import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const navigation = [
        { path: '/', name: 'List Book' },
        { path: '/add', name: 'Add Book' },
    ]
    return (
        <header >
            <h1>Book Managment</h1>
            <nav>
                {navigation.map((nav) => (
                    <NavLink to={nav.path} key={nav.name}>
                        {nav.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header