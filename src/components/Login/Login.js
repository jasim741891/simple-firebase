import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { singInUsingGoogle, user } = useFirebase();
    return (
        <div>
            <h1>Please Login {user.email}</h1>
            <input type="text" />
            <br />
            <input className="mt-2" type="text" />
            <br />
            <button className="mt-5" onClick={singInUsingGoogle}>Google Sing In</button>
            <br />
            <Link to="/reister">New User ?</Link>
        </div>
    );
};

export default Login;