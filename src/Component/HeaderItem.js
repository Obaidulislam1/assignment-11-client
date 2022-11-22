import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const HeaderItem = () => {
    const { user,logOut } = useContext(AuthContext)
    const handlelogOut = () =>{
        logOut()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            {
                user?.email ?
                <>
                <li onClick={handlelogOut}><Link>Log Out</Link></li>
                <li><Link to='/userReview'>Review</Link></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
            }
        </>
    );
};

export default HeaderItem;