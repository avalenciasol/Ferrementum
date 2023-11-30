import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setAuthenticated(!!token);
    }, []);

    return (
        <Routes>
            <Route
                {...rest}
                path="/profile/*"
                element={
                    authenticated ? (
                        <Component />
                    ) : (
                        <Navigate to="/access" />
                    )
                }
            />
        </Routes>
    );
};

export default PrivateRoute;