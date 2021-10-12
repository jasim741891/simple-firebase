

import React, { useContext, createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import useAthu from "../hooks/useAthu";

const PrivateRouter = ({ children, ...rest }) => {
    const user = useAthu()
    let history = useHistory();
    let location = useLocation();
    return <Route
        {...rest}
        render={({ location }) =>
            user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location },
                }}
            />
        } />
};

export default PrivateRouter;