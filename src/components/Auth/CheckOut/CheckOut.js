import React from 'react';
import './CheckOut.css';
import { BiChevronsLeft } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CheckOut = () => {
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
            <div className="movie-facility padding-bottom padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-widget d-flex flex-wrap align-items-center justify-content-between">
                                <div className="title-area">
                                    <h5 className="title">Already a Sparrow  Member?</h5>
                                    <p>Sign in to earn points and make booking easier!</p>
                                </div>
                                <a href="#0" className="sign-in-area">
                                    <FaUserAlt className='signin-user' /><span>Sign in</span>
                                </a>
                            </div>
                            <div className="checkout-widget checkout-contact">
                                <h5 className="title">Share your Contact  Details </h5>
                                <form className="checkout-contact-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter your Mail" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter your Phone Number " />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Continue" className="custom-button" />
                                    </div>
                                </form>
                            </div>
                            <div className="checkout-widget checkout-contact">
                                <h5 className="title">Promo Code </h5>
                                <form className="checkout-contact-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Please enter promo code" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Verify" className="custom-button" />
                                    </div>
                                </form>
                            </div>
                            <div className="checkout-widget checkout-card mb-0">
                                <h5 className="title">Payment Option </h5>
                                <ul className="payment-option">
                                    <li className="active">
                                        <a href="#0">
                                            <img src="https://i.ibb.co/bPdp5kR/card.png" alt="payment" />
                                            <span>Credit Card</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <img src="https://i.ibb.co/bPdp5kR/card.png" alt="payment" />
                                            <span>Debit Card</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <img src="https://i.ibb.co/LdKgQ5V/paypal.png" alt="payment" />
                                            <span>paypal</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <img src="https://i.ibb.co/RYxSKRf/cod.png" alt="payment" />
                                            <span>COD</span>
                                        </a>
                                    </li>
                                </ul>
                                <h6 className="subtitle">Enter Your Card Details </h6>
                                <form className="payment-card-form">
                                    <div className="form-group w-100">
                                        <label for="card1">Card Details</label>
                                        <input type="text" id="card1" />
                                        <div className="right-icon">
                                            <i className="flaticon-lock"></i>
                                        </div>
                                    </div>
                                    <div className="form-group w-100">
                                        <label for="card2"> Name on the Card</label>
                                        <input type="text" id="card2" />
                                    </div>
                                    <div className="form-group">
                                        <label for="card3">Expiration</label>
                                        <input type="text" id="card3" placeholder="MM/YY" />
                                    </div>
                                    <div className="form-group">
                                        <label for="card4">CVV</label>
                                        <input type="text" id="card4" placeholder="CVV" />
                                    </div>
                                    <div className="form-group check-group">
                                        <input id="card5" type="checkbox" checked='' />
                                        <label for="card5">
                                            <span className="title">QuickPay</span>
                                            <span className="info">Save this card information to my Sparrow  account and make faster payments.</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="custom-button" value="make payment" />
                                    </div>
                                </form>
                                <p className="notice">
                                    By Clicking "Make Payment" you agree to the <a href="#0">terms and conditions</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="booking-summery bg-one">
                                <h4 className="title">booking summery</h4>
                                <ul>
                                    <li>
                                        <h6 className="subtitle">Venus</h6>
                                        <span className="info">English-2d</span>
                                    </li>
                                    <li>
                                        <h6 className="subtitle"><span>City Walk</span><span>02</span></h6>
                                        <div className="info"><span>10 SEP TUE, 11:00 PM</span> <span>Tickets</span></div>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0"><span>Tickets  Price</span><span>$150</span></h6>
                                    </li>
                                </ul>
                                <ul className="side-shape">
                                    <li>
                                        <h6 className="subtitle"><span>combos</span><span>$57</span></h6>
                                        <span className="info"><span>2 Nachos Combo</span></span>
                                    </li>
                                    <li>
                                        <h6 className="subtitle"><span>food &amp; bevarage</span></h6>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span className="info"><span>price</span><span>$207</span></span>
                                        <span className="info"><span>vat</span><span>$15</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="proceed-area  text-center">
                                <h6 className="subtitle"><span>Amount Payable</span><span>$222</span></h6>
                                <a href="#0" className="custom-button back-button">proceed</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div >
    );
};

export default CheckOut;