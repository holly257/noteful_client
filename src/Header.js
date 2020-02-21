import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to='/' className='header'>Noteful</Link>
            {/* click to nav to main page */}
        </header>
    )
}

export default Header;