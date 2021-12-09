import react from 'react';
import { Navigate, Route, route } from 'react-router-dom';
import { getToken } from './Controller';

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return !getToken() ? <Component{...props} /> : <Navigate to={{ pathname: "/dashboard/index" }} />;
            }}
        />
    );
}
export default PublicRoute;