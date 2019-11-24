import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { generateToken } from '../util/token';
const LogIn = () => {
    const [formData, updateData] = useState({ email: '', password: '' });
    const alert = useAlert();
    const router = useRouter();
    const valueUpdater = (e: any) => {
        updateData({ ...formData, [e.target.name]: e.target.value });
    };
    const submitForm = (e: any) => {
        e.preventDefault();
        axios
            .post('/auth/validate', {
                email: formData.email,
                password: formData.password,
            })
            .then(res => {
                generateToken(res.data.token);
                router.replace('/');
            })
            .catch(() => {
                alert.show('incorrect credentials');
            });
    };
    return (
        <div className="container">
            <div style={{ width: '300px', margin: '0 auto' }}>
                <form className="form-signin mt-5" onSubmit={submitForm}>
                    <h1 className="h3 mb-3 font-weight-normal ">
                        Welcome back!
                    </h1>
                    <label className="sr-only">Email address</label>
                    <input
                        value={formData.email}
                        onChange={valueUpdater}
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control my-2"
                        placeholder="Email address"
                    />
                    <label className="sr-only">Password</label>
                    <input
                        value={formData.password}
                        onChange={valueUpdater}
                        type="password"
                        name="password"
                        className="form-control my-2"
                        placeholder="Password"
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

export default LogIn;
