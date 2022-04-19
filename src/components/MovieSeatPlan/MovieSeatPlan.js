import React from 'react';
import './MovieSeatPlan.css';
import { BiChevronsLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';
import useFunction from './../../hooks/useFunction';

const MovieSeatPlan = () => {
    const { movie, dimension, hallCity, showTime, setOrder } = useFunction();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    return (
        <div>
            {/* Section Header */}
            <div className="details-banner hero-area bg_img seat-plan-banner" data-background={movie.movieBanner} style={{ backgroundImage: `url(${movie.movieBanner})` }}>
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content style-two">
                            <h3 className="title">{movie.movieName}</h3>
                            <div className="tags">
                                <a href="#0">{hallCity}</a>
                                <a href="#0">English - {dimension}</a>
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
                            {/* <Link to={`/movie-ticket-plan/${movie.movieName}`} className="custom-button back-button">
                                <BiChevronsLeft />back
                            </Link> */}
                        </div>
                        <div className="item date-item">
                            <span className="date">
                                {
                                    months[new Date(movie.showing).getMonth()] + ', ' + new Date(movie.showing).getDate() + " " + new Date(movie.showing).getFullYear()
                                }
                            </span>
                            <select className="nice-select select-bar" tabIndex="0">
                                <option value={showTime} className="option selected">{showTime}</option>
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
                                                    <span className="sit-num">G1</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G2</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G3</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G4</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G5</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G6</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G7</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G8</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G9</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G10</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G11</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G12</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G13</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">G14</span>
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
                                                    <span className="sit-num">F1</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">F2</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">F3</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">F4</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">F5</span>
                                                </li>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">F6</span>
                                                </li>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">F7</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">F8</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">F9</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">F10</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="front-seat">
                                            <ul>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">F11</span>
                                                </li>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">F12</span>
                                                </li>
                                                <li className="single-seat seat-free">
                                                    <img src="https://i.ibb.co/1vTr5Sn/seat01-free.png" alt="seat" />
                                                    <span className="sit-num">F13</span>
                                                </li>
                                                <li className="single-seat">
                                                    <img src="https://i.ibb.co/hBLLgCT/seat01.png" alt="seat" />
                                                    <span className="sit-num">F14</span>
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
                                <h3 className="title">${movie.ticketPrice}</h3>
                            </div>
                            <div className="book-item">
                                <Link to='/checkout' className="custom-button">proceed</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default MovieSeatPlan;