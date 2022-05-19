import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spnnier from '../../ForAll/Spnnier';



const Requird = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Spnnier></Spnnier>
    }
    if (!user) {
        return <Navigate to='/Registor' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default Requird;