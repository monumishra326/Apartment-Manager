import React from 'react';
import styles from './Manger.module.css';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    userLoading,
    userSuccess,
    userFail
} from '../Features/Product/action'

export const Login = () => {
    const dispatch = useDispatch()

    const { handleLogin } = React.useContext(AuthContext);

    const [data, setData] = React.useState({})

    useEffect(() => {

    }, [dispatch])

    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(userLoading())
        fetch(`http://localhost:4500/manager/${form.email}/${form.password}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                const token = Date.now() + form.email;
                handleLogin(true, token, data.name);
                dispatch(userSuccess(data))
                navigatePage()
            })
            .catch((err) => {
                dispatch(userFail(err))
                // console.log(err);
            })
    }

    let navigate = useNavigate()
    const navigatePage = () => {
        navigate(`/`)
    }

    return (
        <section className={styles.Register}>
            <form onSubmit={onSubmit}>
                <table className={styles.RegisterTable}>
                    <thead>

                        <tr>
                            <td><input onChange={handleChange} name="email" type="text" placeholder="Enter your Email" /><br /><br /></td>
                        </tr>

                        <tr>
                            <td><input onChange={handleChange} name="password" type="password" placeholder="Enter your Password" /><br /></td>
                        </tr>

                        <tr>
                            <td><button className={styles.RegisterButton} type="submit" >Login</button></td>
                        </tr>
                    </thead>
                </table>
            </form>
        </section>
    )
};