import React from 'react';
import './MovieSeatPlan.css';
import { BiChevronsLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';

const MovieSeatPlan = () => {
    return (
        <div>
            {/* Section Header */}
            <div className="details-banner hero-area bg_img seat-plan-banner" data-background="https://i.ibb.co/H410jk4/banner04.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/H410jk4/banner04.jpg'})` }}>
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content style-two">
                            <h3 className="title">Venus</h3>
                            <div className="tags">
                                <a href="#0">City Walk</a>
                                <a href="#0">English - 2D</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Title */}
            <div className="page-title bg-one">
                <div className="container">
                    <div className="page-title-area">
                        <div className="item md-order-1">
                            <Link to="/movie-ticket-plan" className="custom-button back-button">
                                <BiChevronsLeft />back
                            </Link>
                        </div>
                        <div className="item date-item">
                            <span className="date">MON, SEP 09 2020</span>
                            <select className="nice-select select-bar" tabIndex="0">
                                <option value="09:40" className="option selected">09:40</option>
                                <option value="13:45" className="option">13:45</option>
                                <option value="15:45" className="option">15:45</option>
                                <option value="19:50" className="option">19:50</option>
                            </select>
                        </div>
                        <div className="item">
                            <h5 className="title">05:00</h5>
                            <p>Mins Left</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Movie Section */}

            <div className="seat-plan-section padding-bottom padding-top">
                <div className="container">
                    <div className="screen-area">
                        <h4 className="screen">screen</h4>
                        <div className="screen-thumb">
                            <img src="https://i.ibb.co/tcTZ6Ck/screen-thumb.png" alt="movie" />
                        </div>
                        <h5 className="subtitle">silver plus</h5>
                        <div className="screen-wrapper">
                            <ul className="seat-area">
                                <li className="seat-line">
                                    <span>G</span>
                                    <ul className="seat--area">
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <span>G</span>
                                </li>
                                <li className="seat-line">
                                    <span>f</span>
                                    <ul className="seat--area">
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">f7</span>
                                                </li>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">f8</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">f9</span>
                                                </li>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">f10</span>
                                                </li>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">f11</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <span>f</span>
                                </li>
                            </ul>
                        </div>
                        <h5 className="subtitle">silver plus couple</h5>
                        <div className="screen-wrapper">
                            <ul className="seat-area couple">
                                <li className="seat-line">
                                    <span>e</span>
                                    <ul className="seat--area">
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <span>e</span>
                                </li>
                                <li className="seat-line">
                                    <span>d</span>
                                    <ul className="seat--area">
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/Vqv4pvk/seat02-booked.png" alt="seat" />
                                                    <span className="sit-num">D7 D8</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <span>d</span>
                                </li>
                                <li className="seat-line">
                                    <span>c</span>
                                    <ul className="seat--area">
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/2K8TXSn/seat02-free.png" alt="seat" />
                                                    <span className="sit-num">f11 f12</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <span>c</span>
                                </li>
                                <li className="seat-line">
                                    <span>b</span>
                                    <ul className="seat--area">
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/Vqv4pvk/seat02-booked.png" alt="seat" />
                                                    <span className="sit-num">b7 b8</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/F4hbb1B/seat02.png" alt="seat" />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <span>b</span>
                                </li>
                                <li className="seat-line">
                                    <span>a</span>
                                    <ul className="seat--area">
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/2K8TXSn/seat02-free.png" alt="seat" />
                                                    <span className="sit-num">a1 a2</span>
                                                </li>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/2K8TXSn/seat02-free.png" alt="seat" />
                                                    <span className="sit-num">a3 a4</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/2K8TXSn/seat02-free.png" alt="seat" />
                                                    <span className="sit-num">a5 a6</span>
                                                </li>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/2K8TXSn/seat02-free.png" alt="seat" />
                                                    <span className="sit-num">a7 a8</span>
                                                </li>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/2K8TXSn/seat02-free.png" alt="seat" />
                                                    <span className="sit-num">a9 a10</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/2K8TXSn/seat02-free.png" alt="seat" />
                                                    <span className="sit-num">a11</span>
                                                </li>
                                                <li className="single-seat seat-free-two">
                                                    <img src="https://i.ibb.co/Vqv4pvk/seat02-booked.png" alt="seat" />
                                                    <span className="sit-num">a12</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <span>a</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="proceed-book bg_img" data-background="https://i.ibb.co/FKhjbH5/movie-bg-proceed.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/FKhjbH5/movie-bg-proceed.jpg'})` }}>
                        <div className="proceed-to-book">
                            <div className="book-item">
                                <span>You have Choosed Seat</span>
                                <h3 className="title">d9, d10</h3>
                            </div>
                            <div className="book-item">
                                <span>total price</span>
                                <h3 className="title">$150</h3>
                            </div>
                            <div className="book-item">
                                <Link to="/checkout" className="custom-button">proceed</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default MovieSeatPlan;