import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const Register = () => {

    const [form, setForm] = useState({
        name: "",
        password: "",
        email: "",
    });

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
            .then(() => {
                setForm("");
            });
    }

    return (
        <section className="Register">
            <div>
                <form onSubmit={handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td><input onChange={handleChange} name="name" type="text" placeholder="Enter your Name" /><br /></td>
                            </tr>

                            <tr>
                                <td>email</td>
                                <td><input onChange={handleChange} name="email" type="text" placeholder="Enter your Email" /><br /><br /></td>
                            </tr>

                            <tr>
                                <td>Password</td>
                                <td><input onChange={handleChange} name="password" type="password" placeholder="Enter your Password" /><br /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><input value="submit" type="submit" /><br /></td>
                            </tr>
                        </thead>
                    </table>
                </form>
            </div>
        </section>
    )
}
