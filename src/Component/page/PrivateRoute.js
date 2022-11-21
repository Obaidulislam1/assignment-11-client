import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({Children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <h1 className='text-5xl mt-40'>Loading...</h1>
    }
    if(user){
        return Children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoute;