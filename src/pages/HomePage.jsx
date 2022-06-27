import React from 'react';
import Banner from "../components/Banner/Banner";
import Categories from "../components/category/Categories";
import MainProducts from "../components/MainProducts/MainProducts";
import ReviewsProducts from "../components/ReviewsProducts/ReviewsProducts";

const HomePage = () => {

    return (
        <div>
            <Banner />
            <Categories />
            <MainProducts />
            <ReviewsProducts />
        </div>
    );
};

export default HomePage;