import React from 'react';
import Carousal from '../../Carousal/Carousal';
import Categories from '../../Categories/Categories/Categories';
import FeaturedProduct from '../../FeaturedProduct/FeaturedProduct';

const Home = () => {
    return (
        <div>
            <Carousal></Carousal>
            <FeaturedProduct></FeaturedProduct>
            <Categories></Categories>
        </div>
    );
};

export default Home;