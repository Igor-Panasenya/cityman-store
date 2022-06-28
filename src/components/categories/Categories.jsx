import React, {useEffect, useRef} from 'react';
import CategoryItem from "./categoryItem/CategoryItem";
import axios from "axios";
import {useState} from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './categories.scss';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3000/categories.json')
            .then(( {data} ) => {
                setCategories(data.categories)
            })
    }, [])


    // Отслеживание ширины экрана для слайдера КАТЕГОРИЙ
    // const [widthScreen, setWidthScreen] = useState(window.screen.width)
    // const getWidthScreen = () => {
    //     window.addEventListener(`resize`, event => {
    //         setWidthScreen(window.screen.width);
    //         console.log(widthScreen)
    //     }, false);
    //     return widthScreen
    // }
    // getWidthScreen()

    return (
        <section className='container'>
            <Swiper
                    modules={[Pagination]}
                    spaceBetween={140}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0 : {
                            width: 0,
                            slidesPerView: 1,
                        },
                        1000 : {
                            width: 1000,
                            slidesPerView: 3,
                        }
                    }}
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