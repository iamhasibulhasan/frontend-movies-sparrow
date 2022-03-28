import React from 'react';
import './MoviesDetails.css';
import { FaFacebookF, FaGithubAlt, FaHackerrank, FaInstagram, FaLinkedinIn, FaCalendarAlt, FaRegClock, FaHeart } from "react-icons/fa";

const MoviesDetails = () => {
    return (
        <div>
            <div className="details-banner bg_img" data-background="https://i.ibb.co/nb1Ngk7/banner03.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/nb1Ngk7/banner03.jpg'})` }}>
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-thumb">
                            <img src="https://i.ibb.co/5kH9SBK/movie03.jpg" alt="movie" />
                            <a href="https://www.youtube.com/embed/KGeBMAgc46E" className="video-popup">
                                <img src="https://i.ibb.co/sqNmHny/video-button.png" alt="movie" />
                            </a>
                        </div>
                        <div className="details-banner-content offset-lg-3">
                            <h3 className="title">Venus</h3>
                            <div className="tags">
                                <a href="#0">English</a>
                                <a href="#0">Hindi</a>
                                <a href="#0">Telegu</a>
                                <a href="#0">Tamil</a>
                            </div>
                            <a href="#0" className="button">horror</a>
                            <div className="social-and-duration">
                                <div className="duration-area">
                                    <div className="item">
                                        <FaCalendarAlt className='icon-i' /><span>06 Dec, 2020</span>
                                    </div>
                                    <div className="item">
                                        <FaRegClock className='icon-i' /><span>2 hrs 50 mins</span>
                                    </div>
                                </div>
                                <ul className="social-share">
                                    <li><a href="#0"><FaFacebookF /></a></li>
                                    <li><a href="#0"><FaGithubAlt /></a></li>
                                    <li><a href="#0"><FaLinkedinIn /></a></li>
                                    <li><a href="#0"><FaHackerrank /></a></li>
                                    <li><a href="#0"><FaInstagram /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Book div */}

            <div class="book-section bg-one">
                <div class="container">
                    <div class="book-wrapper offset-lg-3">
                        <div class="left-side">
                            <div class="item">
                                <div class="item-header">
                                    <div class="thumb">
                                        <img src="https://i.ibb.co/P1vfm9x/tomato.png" alt="movie" />
                                    </div>
                                    <div class="counter-area">
                                        <span>88.00</span>
                                    </div>
                                </div>
                                <p>tomatometer</p>
                            </div>
                            <div class="item">
                                <div class="item-header">
                                    <div class="thumb">
                                        <img src="https://i.ibb.co/h9Tn0CG/cake.png" alt="movie" />
                                    </div>
                                    <div class="counter-area">

                                        <span>80.00</span>
                                    </div>
                                </div>
                                <p>audience Score</p>
                            </div>
                            <div class="item">
                                <div class="item-header">
                                    <h5 class="title">4.5</h5>
                                    <div class="rated">
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                    </div>
                                </div>
                                <p>Users Rating</p>
                            </div>
                            <div class="item">
                                <div class="item-header">
                                    <div class="rated rate-it">
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                    </div>
                                    <h5 class="title">0.0</h5>
                                </div>
                                <p><a href="#0">Rate It</a></p>
                            </div>
                        </div>
                        <a href="#0" class="custom-button">book tickets</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesDetails;