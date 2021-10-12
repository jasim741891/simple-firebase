import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/reister">Reister</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName}</span>
            {user.email && < button onClick={logOut} > log out</button>}
            <Link to="/contact">Contact</Link>
        </div >
    );
};

export default Header;