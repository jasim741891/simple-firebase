import React from 'react';
import { Link } from 'react-router-dom';
import useAthu from '../../hooks/useAthu';

const Reister = () => {
    const use = useAthu();
    return (
        <div>
            <h1>Please Reister</h1>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <Link to="/login">Alreday Reistered</Link>
        </div>
    );
};

export default Reister;