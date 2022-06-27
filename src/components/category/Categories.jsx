import React, {useEffect, useRef} from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import axios from "axios";
import {useState} from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3000/categories.json')
            .then(( {data} ) => {
                setCategories(data.categories)
            })
    }, [])


    // Отслеживание ширины экрана для слайдера КАТЕГОРИЙ
    const [widthScreen, setWidthScreen] = useState(window.screen.width)
    const getWidthScreen = () => {
        window.addEventListener(`resize`, event => {
            setWidthScreen(window.screen.width);
            console.log(widthScreen)
        }, false);
        return widthScreen
    }
    getWidthScreen()

    return (
        <div className='container'>

            <Swiper className='row'
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={widthScreen > '1400' ? '3' : '1'}
                    pagination={{ clickable: true }}
            >
                    {categories.map(catItem =>
                        <SwiperSlide key={catItem.id} >
                            <CategoryItem category={catItem} />
                        </SwiperSlide>
                    )}
            </Swiper>
        </div>
    );
};

export default Categories;