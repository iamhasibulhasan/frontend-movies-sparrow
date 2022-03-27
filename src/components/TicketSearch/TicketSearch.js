import React from 'react';
import './TicketSearch.css';
import { BsSearch } from "react-icons/bs";

const TicketSearch = () => {
    return (
        <div className="search-ticket-section padding-top pt-lg-0">
            <div className="container">

                <div className="search-tab bg_img" data-background="https://i.ibb.co/fXgk7xH/ticket-bg01.jpg" style={{ backgroundImage: `url('https://i.ibb.co/fXgk7xH/ticket-bg01.jpg')` }} >

                    <div className="row align-items-center mb--20">
                        <div className="col-lg-6 mb-20 position-relative">

                            <div className="search-ticket-header">
                                <h6 className="category">welcome to Sparrow </h6>
                                <h3 className="title">what are you looking for</h3>
                            </div>

                        </div>
                        <div className="col-lg-6 mb-20 position-relative">
                            <ul className="tab-menu ticket-tab-menu">
                                <li className="active">
                                    <div className="tab-thumb">
                                        <img src="https://i.ibb.co/zh3H4Cw/ticket-tab01.png" alt="ticket" />
                                    </div>
                                    <span>movie</span>
                                </li>
                                <li>
                                    <div className="tab-thumb">
                                        <img src="https://i.ibb.co/qWYcxMx/ticket-tab02.png" alt="ticket" />
                                    </div>
                                    <span>events</span>
                                </li>
                                <li>
                                    <div className="tab-thumb">
                                        <img src="https://i.ibb.co/j3SN3wp/ticket-tab03.png" alt="ticket" />
                                    </div>
                                    <span>sports</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="tab-area">
                        <div className="tab-item active">
                            <form className="ticket-search-form">
                                <div className="form-group large">
                                    <input type="text" placeholder="Search for Movies" />
                                    <button type="submit"><BsSearch /></button>
                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img src="https://i.ibb.co/kgL1mCS/city.png" alt="ticket" />
                                    </div>
                                    <span className="type">city</span>

                                    <select className="nice-select select-bar" tabIndex="0">



                                        <option value="london" className="selected focus list pb-5">London</option>
                                        <option value="dhaka" className="list">Dhaka</option>
                                        <option value="rosario" className="list">Rosario</option>
                                        <option value="madrid" className="list">Madrid</option>
                                        <option value="kolltaka" className="list">Kollkata</option>
                                        <option value="rome" className="list">Rome</option>
                                        <option value="khoksa" className="list">Khoksa</option>

                                    </select>

                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img src="https://i.ibb.co/z2vsrcB/date.png" alt="ticket" />
                                    </div>
                                    <span className="type">date</span>

                                    <select className="nice-select select-bar" tabIndex="0">



                                        <option value="2021/02/12" className="selected focus list">2021/02/12</option>
                                        <option value="2021/02/12" className="list">2021/02/12</option>
                                        <option value="2021/22/9" className="list">2021/22/9</option>
                                        <option value="2020/30/5" className="list">2020/30/5</option>
                                        <option value="2021/15/7" className="list">2021/15/7</option>
                                        <option value="2022/09/8" className="list">2022/09/8</option>
                                        <option value="2022/05/4" className="list">2022/05/4</option>

                                    </select>


                                </div>
                                <div className="form-group">
                                    <div className="thumb">
                                        <img src="https://i.ibb.co/52N0gBy/cinema.png" alt="ticket" />
                                    </div>
                                    <span className="type">cinema</span>


                                    <select className="nice-select select-bar" tabIndex="0">



                                        <option value="Harry Potter" className="selected focus list pb-5">Harry Potter</option>
                                        <option value="Hunger Game" className="list">Hunger Game</option>
                                        <option value="Joker" className="list">Joker</option>
                                        <option value="Suicide Squad" className="list">Suicide Squad</option>
                                        <option value="Ram Lila" className="list">Ram Lila</option>
                                        <option value="Tom Jerry" className="list">Tom Jerry</option>
                                        <option value="Mr. Bean" className="list">Mr. Bean</option>

                                    </select>


                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default TicketSearch;