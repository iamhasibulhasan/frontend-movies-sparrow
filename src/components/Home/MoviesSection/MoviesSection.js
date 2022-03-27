import React from 'react';
import './MoviesSection.css';

const MoviesSection = () => {
    return (
        <section className="movie-section padding-top padding-bottom bg-two">
            <div className="container">
                <div className="row flex-wrap-reverse justify-content-center">
                    <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0 my-5">
                        <div className="widget-1 widget-facility">
                            <div className="widget-1-body">
                                <ul>
                                    <li>
                                        <a href="#0">
                                            <span className="img"><img src="https://i.ibb.co/TvHkPph/sidebar01.png" alt="sidebar" /></span>
                                            <span className="cate">24X7 Care</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span className="img"><img src="https://i.ibb.co/V9rs9vG/sidebar02.png" alt="sidebar" /></span>
                                            <span className="cate">100% Assurance</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span className="img"><img src="https://i.ibb.co/KxcT3kw/sidebar03.png" alt="sidebar" /></span>
                                            <span className="cate">Our Promise</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-1 widget-banner">
                            <div className="widget-1-body">
                                <a href="#0">
                                    <img src="https://i.ibb.co/CBn9HdX/banner01.jpg" alt="banner" />
                                </a>
                            </div>
                        </div>
                        <div className="widget-1 widget-trending-search">
                            <h3 className="title">Trending Searches</h3>
                            <div className="widget-1-body">
                                <ul>
                                    <li>
                                        <h6 className="sub-title">
                                            <a href="#0">mars</a>
                                        </h6>
                                        <p>Movies</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <a href="#0">alone</a>
                                        </h6>
                                        <p>Movies</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <a href="#0">music event</a>
                                        </h6>
                                        <p>event</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <a href="#0">NBA Games 2020</a>
                                        </h6>
                                        <p>Sports</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-1 widget-banner last-banner">
                            <div className="widget-1-body">
                                <a href="#0">
                                    <img src="https://i.ibb.co/b7hpZth/banner02.jpg" alt="banner" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="article-section padding-bottom">
                            <div className="section-header-1">
                                <h2 className="title">movies</h2>
                                <a className="view-all" href="movie-grid.html">View All</a>
                            </div>
                            <div className="row mb-30-none justify-content-center">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="movie-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/r5BCQfQ/movie01.jpg" alt="movie" />
                                            </a>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">alone</a>
                                            </h5>
                                            <ul className="movie-rating-percent">
                                                <li>
                                                    <div className="thumb">
                                                        <img src="https://i.ibb.co/P1vfm9x/tomato.png" alt="movie" />
                                                    </div>
                                                    <span className="content">88%</span>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src="https://i.ibb.co/h9Tn0CG/cake.png" alt="movie" />
                                                    </div>
                                                    <span className="content">88%</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="movie-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/SyrdDKT/movie02.jpg" alt="movie" />
                                            </a>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">mars</a>
                                            </h5>
                                            <ul className="movie-rating-percent">
                                                <li>
                                                    <div className="thumb">
                                                        <img src="https://i.ibb.co/P1vfm9x/tomato.png" alt="movie" />
                                                    </div>
                                                    <span className="content">88%</span>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src="https://i.ibb.co/h9Tn0CG/cake.png" alt="movie" />
                                                    </div>
                                                    <span className="content">88%</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="movie-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/5kH9SBK/movie03.jpg" alt="movie" />
                                            </a>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">venus</a>
                                            </h5>
                                            <ul className="movie-rating-percent">
                                                <li>
                                                    <div className="thumb">
                                                        <img src="https://i.ibb.co/P1vfm9x/tomato.png" alt="movie" />
                                                    </div>
                                                    <span className="content">88%</span>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src="https://i.ibb.co/h9Tn0CG/cake.png" alt="movie" />
                                                    </div>
                                                    <span className="content">88%</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article-section padding-bottom">
                            <div className="section-header-1">
                                <h2 className="title">events</h2>
                                <a className="view-all" href="events.html">View All</a>
                            </div>
                            <div className="row mb-30-none justify-content-center">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="event-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/mbT20vP/event01.jpg" alt="event" />
                                            </a>
                                            <div className="event-date">
                                                <h6 className="date-title">28</h6>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">Digital Economy Conference 2020</a>
                                            </h5>
                                            <div className="movie-rating-percent">
                                                <span>327 Montague Street</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="event-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/6J2MfmK/event02.jpg" alt="event" />
                                            </a>
                                            <div className="event-date">
                                                <h6 className="date-title">28</h6>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">web design conference 2020</a>
                                            </h5>
                                            <div className="movie-rating-percent">
                                                <span>327 Montague Street</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="event-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/XZbWNG1/event03.jpg" alt="event" />
                                            </a>
                                            <div className="event-date">
                                                <h6 className="date-title">28</h6>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">digital thinkers meetup</a>
                                            </h5>
                                            <div className="movie-rating-percent">
                                                <span>327 Montague Street</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article-section">
                            <div className="section-header-1">
                                <h2 className="title">sports</h2>
                                <a className="view-all" href="sports.html">View All</a>
                            </div>
                            <div className="row mb-30-none justify-content-center">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="sports-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/SxZmtfw/sports01.jpg" alt="sports" />
                                            </a>
                                            <div className="event-date">
                                                <h6 className="date-title">28</h6>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">football league tournament</a>
                                            </h5>
                                            <div className="movie-rating-percent">
                                                <span>327 Montague Street</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="sports-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/zGw4WRX/sports02.jpg" alt="sports" />
                                            </a>
                                            <div className="event-date">
                                                <h6 className="date-title">28</h6>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">world cricket league 2020</a>
                                            </h5>
                                            <div className="movie-rating-percent">
                                                <span>327 Montague Street</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="sports-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="#0">
                                                <img src="https://i.ibb.co/ct98RgJ/sports03.jpg" alt="sports" />
                                            </a>
                                            <div className="event-date">
                                                <h6 className="date-title">28</h6>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                <a href="#0">basket ball tournament 2020</a>
                                            </h5>
                                            <div className="movie-rating-percent">
                                                <span>327 Montague Street</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoviesSection;