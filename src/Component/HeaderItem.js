import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const HeaderItem = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            {
                user?.email ?
                <>
                <li><Link>Log Out</Link></li>
                <li><Link to='/userReview'>Review</Link></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
            }
        </>
    );
};

export default HeaderItem;