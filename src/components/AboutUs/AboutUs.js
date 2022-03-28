import React from 'react';
import './AboutUs.css';
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const AboutUs = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>

            <div className="main-page-header speaker-banner bg_img" data-background="https://i.ibb.co/F0rVdhg/banner07.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/F0rVdhg/banner07.jpg'})` }}>
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">about us</h2>
                        <ul className="breadcrumb">
                            <li>
                                <Link to='/'>
                                    Home &nbsp; <FaAngleDoubleRight />&nbsp;
                                </Link>
                            </li>
                            <li>
                                about us
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="event-about-content">
                                <div className="section-header-3 left-style m-0">
                                    <span className="cate">we are Sparrow </span>
                                    <h2 className="title">Get to know us</h2>
                                    <p>Sparrow's mission is to help people get the most out of the technology that dominates all of our lives today. </p>
                                    <p>
                                        You can watch as much as you want, whenever you want without a single commercial all. There's always something new to discover and new TV shows and movies are added every week!
                                    </p>
                                    <a href="#0" className="custom-button">book tickets</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="about-thumb">
                                <img src="https://i.ibb.co/BPXTwqk/about01.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="philosophy-section padding-top padding-bottom bg-one bg_img bg_quater_img" data-background="https://i.ibb.co/60YwmzM/about-bg.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/60YwmzM/about-bg.jpg'})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-3 bg-two">
                            <div className="philosophy-content">
                                <div className="section-header-3 left-style">
                                    <span className="cate">Take look at</span>
                                    <h2 className="title">Our philosophy</h2>
                                    <p className="ml-0">
                                        Our philosophers have extensive experience working with the tech they write about. They are leaders in the field — hosting talks, creating technology videos or podcasts, developing apps and software, or teaching classes about their subjects — and the majority of our writers hold advanced degrees.
                                        Not only are they experts, but they're also real people who use the technology they write about and are passionate about sharing what they know with you.
                                    </p>
                                </div>
                                <ul className="phisophy-list">
                                    <li>
                                        <div className="thumb">
                                            <img src="https://i.ibb.co/h1M7Mr1/icon1.png" alt="philosophy" />
                                        </div>
                                        <h5 className="title">Honesty &amp; Fairness </h5>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img src="https://i.ibb.co/LZBmVK1/icon2.png" alt="philosophy" />
                                        </div>
                                        <h5 className="title">Clarity &amp; Transparency</h5>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img src="https://i.ibb.co/FBk12Kx/icon3.png" alt="philosophy" />
                                        </div>
                                        <h5 className="title">Focus on Customers</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="speaker-section padding-bottom padding-top">
                <div className="container">
                    <div className="section-header-3">
                        <span className="cate">meet our most valued</span>
                        <h2 className="title">expert team members</h2>
                        <p>World is committed to making participation in the event a harassment free experience for
                            everyone, regardless of level of experience, gender, gender identity and expression</p>
                    </div>
                    <div className="speaker--slider">
                        <div className="speaker-slider">


                            <div className="slider-stage-outer">
                                <div className="slider-stage" >

                                    <Slider {...settings}>
                                        <div className="slider-item cloned" >
                                            <div className="speaker-item">
                                                <div className="speaker-thumb">
                                                    <a href="event-speaker.html">
                                                        <img src="http://pixner.net/boleto/demo/assets/images/speaker/speaker02.jpg" alt="speaker" />
                                                    </a>
                                                </div>
                                                <div className="speaker-content">
                                                    <h5 className="title">
                                                        <a href="event-speaker.html">
                                                            Gerard Bryan
                                                        </a>
                                                    </h5>
                                                    <span>CO-FOUNDER, CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-item cloned" >
                                            <div className="speaker-item">
                                                <div className="speaker-thumb">
                                                    <a href="event-speaker.html">
                                                        <img src="http://pixner.net/boleto/demo/assets/images/speaker/speaker02.jpg" alt="speaker" />
                                                    </a>
                                                </div>
                                                <div className="speaker-content">
                                                    <h5 className="title">
                                                        <a href="event-speaker.html">
                                                            Gerard Bryan
                                                        </a>
                                                    </h5>
                                                    <span>CO-FOUNDER, CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-item cloned" >
                                            <div className="speaker-item">
                                                <div className="speaker-thumb">
                                                    <a href="event-speaker.html">
                                                        <img src="http://pixner.net/boleto/demo/assets/images/speaker/speaker02.jpg" alt="speaker" />
                                                    </a>
                                                </div>
                                                <div className="speaker-content">
                                                    <h5 className="title">
                                                        <a href="event-speaker.html">
                                                            Gerard Bryan
                                                        </a>
                                                    </h5>
                                                    <span>CO-FOUNDER, CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-item cloned" >
                                            <div className="speaker-item">
                                                <div className="speaker-thumb">
                                                    <a href="event-speaker.html">
                                                        <img src="http://pixner.net/boleto/demo/assets/images/speaker/speaker02.jpg" alt="speaker" />
                                                    </a>
                                                </div>
                                                <div className="speaker-content">
                                                    <h5 className="title">
                                                        <a href="event-speaker.html">
                                                            Gerard Bryan
                                                        </a>
                                                    </h5>
                                                    <span>CO-FOUNDER, CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-item cloned" >
                                            <div className="speaker-item">
                                                <div className="speaker-thumb">
                                                    <a href="event-speaker.html">
                                                        <img src="http://pixner.net/boleto/demo/assets/images/speaker/speaker02.jpg" alt="speaker" />
                                                    </a>
                                                </div>
                                                <div className="speaker-content">
                                                    <h5 className="title">
                                                        <a href="event-speaker.html">
                                                            Gerard Bryan
                                                        </a>
                                                    </h5>
                                                    <span>CO-FOUNDER, CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AboutUs;