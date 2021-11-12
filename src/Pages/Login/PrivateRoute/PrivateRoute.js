import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    //Page reload korle  jeno log in Page e na nia jay

    if (isLoading) {
        return <div class="spinner-border text-primary d-flex justify-content-center" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/login",

                        state: { from: location }
                    }}
                />
            }
        >

        </Route>
    );
};

export default PrivateRoute;