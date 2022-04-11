import React, { useEffect, useState } from 'react';
import TicketSearch from '../TicketSearch/TicketSearch';
import './Movies.css';
import { FaPlus } from "react-icons/fa";
import useFunction from './../../hooks/useFunction';
import { Link } from 'react-router-dom';

const Movies = () => {
    const { http } = useFunction();
    const [movies, setMovies] = useState([]);

    // Get All Movies From MongoDB
    useEffect(() => {
        http.get('/movies')
            .then(res => setMovies(res.data))
    }, []);
    console.log(movies);

    return (
        <div>
            <div className="banner-section">
                <div className="banner-bg bg_img bg-fixed" data-background="https://i.ibb.co/HBrSTq0/banner02.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/HBrSTq0/banner02.jpg'})` }}></div>
                <div className="container">
                    <div className="banner-content">
                        <h1 className="title bold">get <span className="color-theme">movie</span> tickets</h1>
                        <p>Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more</p>
                    </div>
                </div>
            </div>
            <TicketSearch></TicketSearch>

            <div className="movie-section padding-top padding-bottom">
                <div className="container">
                    <div className="row flex-wrap-reverse justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-3">
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img src="https://i.ibb.co/CBn9HdX/banner01.jpg" alt="banner" />
                                    </a>
                                </div>
                            </div>
                            <div className="widget-1 widget-check">
                                <div className="widget-header">
                                    <h5 className="m-title">Filter By</h5> <a href="#0" className="clear-check">Clear All</a>
                                </div>
                                <div className="widget-1-body">
                                    <h6 className="subtitle">Language</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang1" /><label htmlFor="lang1">Tamil</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang2" /><label htmlFor="lang2">Telegu</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang3" /><label htmlFor="lang3">Hindi</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang4" /><label htmlFor="lang4">English</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang5" /><label htmlFor="lang5">Multiple Language</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang6" /><label htmlFor="lang6">Gujrati</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="lang" id="lang7" /><label htmlFor="lang7">Bangla</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-check">
                                <div className="widget-1-body">
                                    <h6 className="subtitle">experience</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="mode1" /><label htmlFor="mode1">2d</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="mode" id="mode2" /><label htmlFor="mode2">3d</label>
                                        </div>
                                    </div>
                                    <div className="add-check-area">
                                        <a href="#0">view more <FaPlus className='plus-icon' /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-check">
                                <div className="widget-1-body">
                                    <h6 className="subtitle">genre</h6>
                                    <div className="check-area">
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre1" /><label htmlFor="genre1">thriller</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre2" /><label htmlFor="genre2">horror</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre3" /><label htmlFor="genre3">drama</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre4" /><label htmlFor="genre4">romance</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre5" /><label htmlFor="genre5">action</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre6" /><label htmlFor="genre6">comedy</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre7" /><label htmlFor="genre7">romantic</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre8" /><label htmlFor="genre8">animation</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre9" /><label htmlFor="genre9">sci-fi</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="genre" id="genre10" /><label htmlFor="genre10">adventure</label>
                                        </div>
                                    </div>
                                    <div className="add-check-area">
                                        <a href="#0">view more <FaPlus className='plus-icon' /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img src="https://i.ibb.co/b7hpZth/banner02.jpg" alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 mb-50 mb-lg-0">
                            <div className="filter-tab tab">
                                <div className="filter-area">
                                    <div className="filter-main">
                                        <div className="left">
                                            <div className="item">
                                                <span className="show">Show :</span>



                                                <select className="nice-select select-bar list" tabIndex="0">

                                                    <option data-value="12" className="option selected">12</option>
                                                    <option data-value="15" className="option">15</option>
                                                    <option data-value="18" className="option">18</option>
                                                    <option data-value="21" className="option">21</option>
                                                    <option data-value="30" className="option">30</option>

                                                </select>

                                            </div>
                                            <div className="item">
                                                <span className="show">Sort By :</span>



                                                <select className="nice-select select-bar list" tabIndex="0">
                                                    <option value="Showing" className="option selected">Showing</option>
                                                    <option value="Exclusive" className="option">Exclusive</option>
                                                    <option value="Trending" className="option">Trending</option>
                                                    <option value="Most view" className="option">Most view</option>
                                                </select>

                                            </div>
                                        </div>
                                        <ul className="grid-button tab-menu">
                                            <li className="active">
                                                <i className="fas fa-th"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-bars"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-area">
                                    <div className="tab-item active">

                                        <div className="row mb-10 justify-content-center">

                                            {
                                                movies.map(movie => <div className="col-sm-6 col-lg-4">

                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <Link to={`/movies-details/${movie._id}`}>
                                                                <img src={movie.moviePoster} alt="movie" />
                                                            </Link>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <Link to={`/movies-details/${movie._id}`}>{movie.movieName}</Link>
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

                                                </div>)
                                            }


                                        </div>
                                    </div>


                                </div>


                                <div className="pagination-area text-center">
                                    <a href="#0">&#171;<span>Prev</span></a>
                                    <a href="#0">1</a>
                                    <a href="#0">2</a>
                                    <a href="#0" className="active">3</a>
                                    <a href="#0">4</a>
                                    <a href="#0">5</a>
                                    <a href="#0"><span>Next</span>&#187;</a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movies;