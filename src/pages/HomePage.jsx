import React from 'react';
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";
import MainProducts from "../components/mainProducts/MainProducts";
import ReviewsProducts from "../components/reviewsProducts/ReviewsProducts";

const HomePage = () => {

    return (
        <>
            <Banner />
            <Categories />
            <MainProducts />
            <ReviewsProducts />
        </>
    );
};

export default HomePage;