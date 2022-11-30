import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/useSeller';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isSeller] = useSeller(user.email);
     
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;