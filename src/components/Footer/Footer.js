import React from 'react';
import './Footer.css';
import { FaFacebookF, FaGithubAlt, FaHackerrank, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

    const socialLinks = (e, link) => {
        window.open(link);
        e.preventDefault();
    }
    return (
        <div className="footer-section">

            <div className="newslater-section padding-bottom">
                <div className="container">
                    <div className="newslater-container bg_img" data-background="https://i.ibb.co/Fh3QW1F/newslater-bg01.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/Fh3QW1F/newslater-bg01.jpg'})` }}>
                        <div className="newslater-wrapper">
                            <h5 className="cate">subscribe to Boleto </h5>
                            <h3 className="title">to get exclusive benifits</h3>
                            <form className="newslater-form">
                                <input type="text" placeholder="Your Email Address" />
                                <button type="submit">subscribe</button>
                            </form>
                            <p>We respect your privacy, so we never share your info</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-top">
                    <div className="logo">
                        <a href="index-1.html">
                            <img src="https://i.ibb.co/z6BMYGx/logo-sparrow.png" alt="footer" />
                        </a>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="#0" onClick={(e) => socialLinks(e, 'https://www.facebook.com/iamtheridu/')}>
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="#0" onClick={(e) => socialLinks(e, 'https://github.com/iamhasibulhasan')} className="active">
                                <FaGithubAlt />
                            </a>
                        </li>
                        <li>
                            <a href="#0" onClick={(e) => socialLinks(e, 'https://www.linkedin.com/in/iam-hasibulhasan/')}>
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a href="#0" onClick={(e) => socialLinks(e, 'https://www.hackerrank.com/Hasibul')}>
                                <FaHackerrank />
                            </a>
                        </li>
                        <li>
                            <a href="#0" onClick={(e) => socialLinks(e, 'https://www.instagram.com/iamtheridu/')}>
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-area">
                        <div className="left">
                            <p>Copyright © 2022.All Rights Reserved By <a href='#0' onClick={(e) => socialLinks(e, 'https://hasibul-hasan.netlify.app/')}>Hasibul Hasan </a></p>
                        </div>
                        <ul className="links">
                            <li>
                                <a href="#0">About</a>
                            </li>
                            <li>
                                <a href="#0">Terms Of Use</a>
                            </li>
                            <li>
                                <a href="#0">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#0">FAQ</a>
                            </li>
                            <li>
                                <a href="#0">Feedback</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;