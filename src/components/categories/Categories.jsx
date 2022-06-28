import React, {useEffect, useRef} from 'react';
import CategoryItem from "./categoryItem/CategoryItem";
import axios from "axios";
import {useState} from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        axios.get('https://628f86d60e69410599de1f6f.mockapi.io/categories')
            .then(( {data} ) => {
                setCategories(data)
            })
    }, [])

    return (
        <section className='container'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 23,
                    },
                }}
                modules={[Pagination]}
            >
                    {categories.map(catItem =>
                        <SwiperSlide key={catItem.id} >
                            <CategoryItem category={catItem} />
                        </SwiperSlide>
                    )}
            </Swiper>
        </section>
    );
};

export default Categories;