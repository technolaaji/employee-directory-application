import axios from 'axios';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { mainCont } from '../styles/SignupStyle';
const SignUp = () => {
    const [formData, updateData] = useState({
        email: '',
        password: '',
        retype_password: '',
    });
    const alert = useAlert();
    const valueUpdater = (e: any) => {
        updateData({ ...formData, [e.target.name]: e.target.value });
    };

    const valueSubmit = (e: any) => {
        e.preventDefault();
        if (formData.password !== formData.retype_password) {
            alert.show('Passwords do not match');
        } else {
            axios
                .post('/auth/create', {
                    email: formData.email,
                    password: formData.password,
                })
                .then(() => {
                    alert.show('account created successfully!');
                })
                .catch(() => {
                    alert.show('have you tried logging in?');
                });
        }
    };

    return (
        <div className="container">
            <div className={mainCont}>
                <form className="form-signin" onSubmit={valueSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal mt-5">
                        Please sign in
                    </h1>
                    <label className="sr-only">Email address</label>
                    <input
                        onChange={valueUpdater}
                        value={formData.email}
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control my-2"
                        placeholder="Email address"
                    />
                    <label className="sr-only">Password</label>
                    <input
                        onChange={valueUpdater}
                        value={formData.password}
                        type="password"
                        name="password"
                        className="form-control my-2"
                        placeholder="Password"
                    />

                    <input
                        onChange={valueUpdater}
                        value={formData.retype_password}
                        type="password"
                        name="retype_password"
                        className="form-control my-2"
                        placeholder="Retype Password"
                    />

                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
