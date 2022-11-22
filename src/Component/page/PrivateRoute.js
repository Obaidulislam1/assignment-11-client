import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)
    console.log(user);
    if(loading){
        return <h1 className='text-3xl mt-20 text-center'>Loading...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoute;