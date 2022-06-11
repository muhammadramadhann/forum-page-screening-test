import React, { useState } from "react";
import './Auth.css';

function Login() {

    const initialValues = {
        email: "",
        password: ""
    }

    const [loginValues, setLoginValues] = useState(initialValues);
    const [loginErrors, setLoginErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginValues({
            ...loginValues,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginErrors(validation(loginValues));
    }

    const validation = (login) => {
        const errors = {}
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!login.email) {
            errors.email = "Wajib diisi"
        }
        if (!login.password) {
            errors.password = "Wajib diisi"
        }
        if (!regexEmail.test(login.email)) {
            errors.email = "Format email salah"
        }
        return errors;
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={loginValues.email} onChange={handleChange} />
                    <p className="error">{loginErrors.email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={loginValues.password} onChange={handleChange} />
                    <p className="error">{loginErrors.password}</p>
                </div>
                <button type="submit" className="btn-submit">Login</button>
            </form>
        </div>
    );
}

export default Login;