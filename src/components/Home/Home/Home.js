import React from 'react';
import TicketSearch from '../../TicketSearch/TicketSearch';
import Banner from '../Banner/Banner';
import MoviesSection from '../MoviesSection/MoviesSection';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TicketSearch></TicketSearch>
            <MoviesSection></MoviesSection>
        </div>
    );
};

export default Home;