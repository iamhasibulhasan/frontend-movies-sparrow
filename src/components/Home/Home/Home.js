import React from 'react';
import TicketSearch from '../../TicketSearch/TicketSearch';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TicketSearch></TicketSearch>
        </div>
    );
};

export default Home;