import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({Children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContext)
    if(user){
        return Children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoute;