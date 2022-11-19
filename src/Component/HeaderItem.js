import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = () => {
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link>Login</Link></li>
            <li><Link>Item 3</Link></li>
        </>
    );
};

export default HeaderItem;