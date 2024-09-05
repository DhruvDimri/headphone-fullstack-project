import React, { useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Element, ...rest}) => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            console.log("aagya check auth route pe")
            try {
                const response = await fetch('https://headphone-fullstack-project-1.onrender.com/users/check-auth', {
                    method: 'GET',
                    credentials: 'include',
                });

                console.log('Response status:', response.status );

                if(response.ok){
                    setIsAuthenticated(true);
                }else{
                    setIsAuthenticated(false);
                }
            } catch(error) {
                console.error('Auth check failed:', error)
                setIsAuthenticated(false);
            }finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [setIsAuthenticated]);

    if(loading) {
        return <div>Loading...</div>
    }

          return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;