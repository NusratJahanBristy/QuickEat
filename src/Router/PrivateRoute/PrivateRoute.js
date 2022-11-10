import React from 'react';
import { useContext } from 'react';
// import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import spinner from '../../assets/images/spinner.gif'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        // return <Spinner animation='border' variant='primary' />
        // return <img className='mx-auto w-40 h-40' src={spinner} alt=''/>
        // return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
        // return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;