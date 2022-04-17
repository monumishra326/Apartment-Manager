import { Link } from 'react-router-dom';
import React from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from './Flat.module.css'
import { useDispatch, useSelector } from 'react-redux'
export const Navbar = () => {

    //handleLogin for ContextAPI
    const {
        loading,
        userDetails
    } = useSelector((state) => state.userLoginState)

    const { username, isAuth, handleLogin } = React.useContext(AuthContext);

    const logoutNow = () => {
        handleLogin(false, "", "");
    }

    return (
        <div className={styles.Navbar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contactus">Contact</Link>

            {!isAuth ?
                <Link to="/manager">Register</Link> : <></>
            }

            {isAuth ?
                <a onClick={logoutNow}>Logout({username})</a> :
                <Link to="/login">Login</Link>
            }
        </div>
    )
}
