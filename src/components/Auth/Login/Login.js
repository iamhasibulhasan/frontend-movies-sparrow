import React from 'react';
import './Login.css';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {
    const { signInUsingGoogle, user, signInUsingEmail } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    if (user.email) {
        history.push('/')
    }
    // Google login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    // Email login
    const handleEmailLogin = (data) => {
        signInUsingEmail(data.email, data.password)
            .then(result => {
                history.push(redirect_url);
            })
    }


    return (
        <div className="account-section bg_img" data-background="https://i.ibb.co/dcY3yQy/account-bg.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/dcY3yQy/account-bg.jpg'})` }}>
            <div className="container">
                <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                            <span className="cate">hello</span>
                            <h2 className="title">welcome back</h2>
                        </div>
                        <form className="account-form" onSubmit={handleSubmit(handleEmailLogin)}>
                            <div className="form-group">
                                <label htmlFor="email2">Email<span>*</span></label>&nbsp;{errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                                <input type="text" placeholder="Enter Your Email" id="email2"{...register("email", { required: true })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass3">Password<span>*</span></label>&nbsp;{errors.password && <span style={{ color: 'red' }}>This field is required</span>}
                                <input type="password" placeholder="Password" id="pass3"{...register("password", { required: true })} />
                            </div>
                            <div className="form-group checkgroup">
                                <input type="checkbox" id="bal2" required="" checked="" readOnly />
                                <label htmlFor="bal2">remember password</label>
                                <a href="#0" className="forget-pass">Forget Password</a>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" value="log in" />
                            </div>
                        </form>
                        <div className="option">
                            Don't have an account? <Link to="/join-us">sign up now</Link>
                        </div>
                        <div className="or"><span>Or</span></div>
                        <ul className="social-icons">
                            <li>
                                <a onClick={handleGoogleLogin} href="#0" className="">
                                    <FaGoogle />
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="">
                                    <FaFacebookF />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;