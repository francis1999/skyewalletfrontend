import react from 'react';
import { Navigate, Route, route } from 'react-router-dom';
import { getToken } from './Controller';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return getToken() ? <Component{...props} />
                    : <Navigate to={{ pathname: "/Login", state: { from: props.location } }} />;
            }}
        />
    );
}
export default PrivateRoute;