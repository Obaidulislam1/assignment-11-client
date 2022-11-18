import React from 'react';
import Review from '../Review';
import Service from '../Service';
import Slider from '../Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <Review></Review>
        </div>
    );
};

export default Home;