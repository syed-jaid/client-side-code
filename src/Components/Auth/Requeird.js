import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spnnier from '../ForAll/Spnnier';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const Requeird = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Spnnier></Spnnier>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default Requeird;