import React from 'react';
import './JoinUs.css';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JoinUs = () => {
    return (
        <div className="account-section bg_img" data-background="https://i.ibb.co/dcY3yQy/account-bg.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/dcY3yQy/account-bg.jpg'})` }}>
            <div className="container">
                <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                            <span className="cate">welcome</span>
                            <h2 className="title">to Sparrow </h2>
                        </div>
                        <form className="account-form">
                            <div className="form-group">
                                <label for="email1">Email<span>*</span></label>
                                <input type="text" placeholder="Enter Your Email" id="email1" required="" />
                            </div>
                            <div className="form-group">
                                <label for="pass1">Password<span>*</span></label>
                                <input type="password" placeholder="Password" id="pass1" required="" />
                            </div>
                            <div className="form-group checkgroup">

                                <input type="checkbox" id="bal" required="" checked="" />
                                <label for="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="option">
                            Already have an account? <Link to='/login' >Login</Link>
                        </div>
                        <div className="or"><span>Or</span></div>
                        <ul className="social-icons">
                            <li>
                                <a href="#0" className="">
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

export default JoinUs;