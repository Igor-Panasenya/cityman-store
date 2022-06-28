import React from 'react';
import {useState, useEffect} from "react";
import ProductItem from "../productItem/ProductItem";
import axios from "axios";

const MainProducts = () => {

    const mainProducts = [
        {
            "id": "6-ties",
            "title": "TIE ORIENT FG",
            "IMG": "../../../img/Categories/CategoryTies/tie6.jpg",
            "price": "7.18",
            "category": "ties"
        },
        {
            "id": "10-razors",
            "title": "RAZORS Q&Q F45",
            "IMG": "/img/Categories/CategoryRazors/razor10.jpg",
            "price": "43.00",
            "category": "razors"
        },
        {
            "id": "5-razors",
            "title": "RAZORS TISSOT VR",
            "IMG": "/img/Categories/CategoryRazors/razor5.jpg",
            "price": "93.00",
            "category": "razors"
        },
        {
            "id": "2-watches",
            "title": "WATCH Y-LONDON",
            "IMG": "/img/Categories/CategoryWatches/watches2.jpg",
            "price": "203.00",
            "category": "watches"
        },
    ];

    // // ГЛАВНЫЕ ТОВАРЫ УСЛОВНО БУДУТ РАНДОМНЫМИ ТОВАРАМИ ИЗ РАНДОМНЫХ КАТЕГОРИЙ
    // const [categories, setCategories] = useState([]);
    // // const [randomValueProduct, setRandomValueProduct] = useState();
    //
    // const [mainProducts, setMainProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    //
    // // ПОЛУЧАЕМ СПИСОК КАТЕГОРИЙ С СЕРВЕРА
    // useEffect(() =>{
    //     axios.get('http://localhost:3000/categories.json')
    //         .then(( {data} ) => {
    //             setCategories(data.categories);
    //         })
    // }, [])
    //
    // // ПРОВЕРКА НА ПОЛУЧЕНИЕ КАТЕГОРИЙ
    // if (categories.length > 0) {
    //     // ПОЛУЧЕНИЕ 4 РАНДОМНЫХ ПРОДУКТА
    //     while (mainProducts.length < 4) {
    //
    //         const randomIndexCategory = Math.floor(Math.random()*categories.length);
    //         const randomValueCategory = categories[randomIndexCategory].title;
    //         console.log('категория', randomValueCategory);
    //
    //         // ПОЛУЧАЕМ РАНДОМНУЮ КАТЕГОРИЮ
    //         axios.get(`https://628f86d60e69410599de1f6f.mockapi.io/${randomValueCategory}`)
    //             .then(response => {
    //
    //                 // ПОЛУЧАЕМ РАНДОМНЫЙ ПРОДУКТ
    //                 const randomIndexProduct = Math.floor(Math.random()*response.data.length);
    //                 const randomValueProduct = response.data[randomIndexProduct];
    //                 if (!mainProducts.includes(randomValueProduct)) {
    //                     setMainProducts(mainProducts.push(randomValueProduct));
    //                     console.log('Список', mainProducts);
    //                 }
    //                 setIsLoading(false);
    //             })
    //
    //         setMainProducts(mainProducts.push(1));
    //     }
    // }

    return (
        <section className='container'>
            <div className='row'>
                {mainProducts.map(Product =>
                    <ProductItem Product={Product} key={Product.id}/>
                )}
            </div>
        </section>
    );
};

export default MainProducts;