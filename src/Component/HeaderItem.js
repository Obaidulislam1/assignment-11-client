import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = () => {
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/userReview'>Review</Link></li>
        </>
    );
};

export default HeaderItem;