import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Manger.module.css';
export const Manager = () => {

    const [form, setForm] = useState({
        name: "",
        password: "",
        email: "",
    });
    useEffect(() => {
        handleChange
    }, [setForm]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: form.name,
            email: form.email,
            password: form.password,
        };
        console.log("Payload: " + payload);

        fetch("http://localhost:4500/manager", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            },
        })
        navigatePage()
    }

    let navigate = useNavigate()
    const navigatePage = () => {
        navigate(`/login`)
    }

    return (
        <section className={styles.Register}>
            <form onSubmit={handleSubmit}>
                <table className={styles.RegisterTable}>
                    <thead>
                        <tr>
                            {/* <td>Name</td> */}
                            <td><input onChange={handleChange} name="name" type="text" placeholder="Enter your Name" /><br /></td>
                        </tr>

                        <tr>
                            {/* <td>email</td> */}
                            <td><input onChange={handleChange} name="email" type="text" placeholder="Enter your Email" /><br /><br /></td>
                        </tr>

                        <tr>
                            {/* <td>Password</td> */}
                            <td><input onChange={handleChange} name="password" type="password" placeholder="Enter your Password" /><br /></td>
                        </tr>

                        <tr>
                            {/* <td></td> */}
                            <td><button className={styles.RegisterButton} type="submit" >Register</button></td>
                        </tr>
                    </thead>
                </table>
            </form>
        </section>
    )
}
