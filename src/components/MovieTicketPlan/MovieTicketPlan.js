import React, { useState, useRef } from 'react';
import './MovieTicketPlan.css';
import { FaHeart, FaMapMarkerAlt, FaAngleRight } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { Link } from 'react-router-dom';
import useFunction from './../../hooks/useFunction';

const MovieTicketPlan = () => {
    const { movie, setOrder } = useFunction();
    const [active, setActive] = useState('');
    const [dimension, setDimension] = useState('2D');
    const [hallCity, setHallCity] = useState('Dhaka');

    const handleDimension = (e) => {
        setDimension(e.target.value);
    }
    const handleHallCity = (e) => {
        setHallCity(e.target.value);
    }

    const showTicketPopup = (e, active) => {
        setActive(active);
        setOrder(dimension, hallCity, e.target.innerText);
        e.preventDefault();
    }

    return (
        <div>
            <div className="details-banner hero-area bg_img" data-background={movie.movieBanner} style={{ backgroundImage: `url(${movie.movieBanner})` }}>
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content">
                            <h3 className="title">{movie.movieName}</h3>
                            <div className="tags">
                                {
                                    movie.language?.split(',').map(lan => <a href="#0">{lan}</a>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Movies book section */}
            <div className="book-section bg-one">
                <div className="container">
                    <form className="ticket-search-form two">
                        <div className="form-group">
                            <div className="thumb">
                                <img src="https://i.ibb.co/kgL1mCS/city.png" alt="ticket" />
                            </div>
                            <span className="type">city</span>
                            <select onChange={handleHallCity} className="nice-select select-bar" tabIndex="0">
                                <option value="London" className="option">London</option>
                                <option value="Dhaka" className="option">Dhaka</option>
                                <option value="Rosario" className="option">Rosario</option>
                                <option value="Madrid" className="option">Madrid</option>
                                <option value="Koltaka" className="option">Koltaka</option>
                                <option value="Rome" className="option">Rome</option>
                                <option value="Kushtia" className="option">Kushtia</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                                <img src="https://i.ibb.co/z2vsrcB/date.png" alt="ticket" />
                            </div>
                            <span className="type">date</span>
                            <select className="nice-select select-bar" tabIndex="0">
                                {
                                    <option value={movie.showing} className="option">{movie.showing}</option>

                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                                <img src="https://i.ibb.co/52N0gBy/cinema.png" alt="ticket" />
                            </div>
                            <span className="type">cinema</span>
                            <select className="nice-select select-bar" tabIndex="0">
                                <option value={movie.movieName} className="selected focus list pb-5">{movie.movieName}</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                                <img src="https://i.ibb.co/nwSDvJt/exp.png" alt="ticket" />
                            </div>
                            <span className="type">Experience</span>
                            <select onChange={handleDimension} className="nice-select select-bar" tabIndex="0">
                                {
                                    movie.dimension.split(", ").map(m => <option value={m} className="option selected">{m}</option>)

                                }
                            </select>
                        </div>
                    </form>
                </div>
            </div>



            {/* Ticket Plan Section */}
            <div className="ticket-plan-section padding-bottom padding-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 mb-5 mb-lg-0">
                            <ul className="seat-plan-wrapper bg-five">
                                <li>
                                    <div className="movie-name">
                                        <div className="icons">
                                            <FaHeart className='heart-i' />
                                        </div>
                                        <a href="#0" className="name">Genesis Cinema</a>
                                        <div className="location-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <div className="movie-schedule">
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            09:40
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            13:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            15:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            19:50
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="movie-name">
                                        <div className="icons">
                                            <FaHeart className='heart-i' />
                                        </div>
                                        <a href="#0" className="name">the beach</a>
                                        <div className="location-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <div className="movie-schedule">
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            09:40
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            13:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            15:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            19:50
                                        </div>
                                    </div>
                                </li>
                                <li className="active">
                                    <div className="movie-name">
                                        <div className="icons">
                                            <FaHeart className='heart-i' />
                                        </div>
                                        <a href="#0" className="name">city work</a>
                                        <div className="location-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <div className="movie-schedule">
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            09:40
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            13:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            15:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            19:50
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="movie-name">
                                        <div className="icons">
                                            <FaHeart className='heart-i' />
                                        </div>
                                        <a href="#0" className="name">box park</a>
                                        <div className="location-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <div className="movie-schedule">
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            09:40
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            13:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            15:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            19:50
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="movie-name">
                                        <div className="icons">
                                            <FaHeart className='heart-i' />
                                        </div>
                                        <a href="#0" className="name">la mer</a>
                                        <div className="location-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <div className="movie-schedule">
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            09:40
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            13:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            15:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            19:50
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="movie-name">
                                        <div className="icons">
                                            <FaHeart className='heart-i' />
                                        </div>
                                        <a href="#0" className="name">wanted</a>
                                        <div className="location-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                    </div>
                                    <div className="movie-schedule">
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            09:40
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            13:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            15:45
                                        </div>
                                        <div className="item" onClick={(e) => showTicketPopup(e, 'active')}>
                                            19:50
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-10">
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img src="https://i.ibb.co/5rmqmZ9/banner03.jpg" alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* popup display */}
            <div className={active === 'active' ? 'window-warning-active' : 'window-warning'}>
                <div className="lay"></div>
                <div className="warning-item">
                    <h6 className="subtitle">Welcome! </h6>
                    <h4 className="title">Select Your Seats</h4>
                    <div className="thumb">
                        <img src="https://i.ibb.co/HNVyVWL/seat-plan.png" alt="movie" />
                    </div>
                    <Link to={`/movie-seat-plan/${movie.movieName}`} className="custom-button seatPlanButton">Seat Plans<FaAngleRight className='right-arrow' /></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#0' onClick={(e) => showTicketPopup(e, 'hide')} className="custom-button seatPlanButton">Close <BiX className='right-arrow' /></a>
                </div>
            </div>

        </div>
    );
};

export default MovieTicketPlan;