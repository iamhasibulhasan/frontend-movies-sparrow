import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'typed.js';
import './Banner.css';

const Banner = () => {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                'Movie',
                'Event',
                'Sport'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '|',
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div className='banner-section'>
            <div className="banner-bg bg_img bg-fixed" data-background="https://i.ibb.co/725n3mL/banner01.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/725n3mL/banner01.jpg'})` }}></div>
            <div className='container'>
                <div className="banner-content">
                    <h1 className="title  cd-headline clip"><span className="d-block">book your</span> tickets for&nbsp;
                        <span className="color-theme cd-words-wrapper p-0 m-0">

                            <b style={{ color: '#31d7a9' }} ref={el} />

                        </span>
                    </h1>
                    <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;