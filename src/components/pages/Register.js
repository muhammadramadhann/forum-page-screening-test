import React, { useState } from "react";
import './Auth.css';

function Register() {
    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

    const [registerValues, setRegisterValues] = useState(initialValues);
    const [registerErrors, setRegisterErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterValues({
            ...registerValues,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegisterErrors(validation(registerValues));
    }

    const validation = (register) => {
        const errors = {}
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!register.name) {
            errors.name = "Wajib diisi"
        }
        if (!register.email) {
            errors.email = "Wajib diisi"
        }
        if (!register.password) {
            errors.password = "Wajib diisi"
        }
        if (!regexEmail.test(register.email)) {
            errors.email = "Format email salah"
        }
        return errors;
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={registerValues.name} onChange={handleChange} />
                    <p className="error">{registerErrors.name}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={registerValues.email} onChange={handleChange} />
                    <p className="error">{registerErrors.email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={registerValues.password} onChange={handleChange} />
                    <p className="error">{registerErrors.password}</p>
                </div>
                <button type="submit" className="btn-submit">Register</button>
            </form>
        </div>
    );
}

export default Register;