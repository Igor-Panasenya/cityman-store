import {useDispatch, useSelector} from "react-redux";
import {GiRazor} from "react-icons/gi";
import {GiTie} from "react-icons/gi";
import {BsWatch} from "react-icons/bs";
import Search from "../components/UI/search/Search";
import Sort from "../components/UI/sort/Sort";
import ProductItem from "../components/productItem/ProductItem";
import React, {useEffect, useState} from "react";
import axios from "axios";
import SkeletonProducts from "../components/UI/skeletonProducts/SkeletonProducts";
import {setSort} from "../redux/slices/sortSlice";
import ProductsService from "../API/ProductsService";
import {useFetching} from "../hooks/useFetching";
import Widgets from "../components/UI/widgets/Widgets";

const CategoryPage = () => {

    const category = useSelector(state => state.category.currentCategory)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts();
    }, [])

    const [fetchProducts, isLoading, error] = useFetching(async () => {
        const Products = await ProductsService.getProducts(category.title);
        setProducts(Products);
    })

    const [searchQuery, setSearchQuery] = useState('')

    // СОРТИРОВКА
    const sortList =[
        {value: 'id', name: 'popularity'},
        {value: 'title', name: 'alphabet'},
        {value: 'price', name: 'price'},
    ]
    const sort = useSelector(state => state.sort.sort)
    const sortPosts = (sort) => {
        setProducts([...products].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    useEffect(() =>{
        sortPosts(sort.value)
    }, [sort])

    // ОБНУЛЕНИЕ СОРТА ПРИ ИЗМЕНЕНИИ КАТЕГОРИИ
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(setSort(sortList[0]))
    }, [category])

    // if(!category) return null

    return (
        <div className="container">

            <h1>
                {category.title}
                {category.title === 'ties' && <GiTie size={50} />}
                {category.title === 'watches' && <BsWatch size={50} />}
                {category.title === 'razors' && <GiRazor size={50} />}
            </h1>

            <div className='attributes'>
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <Sort sortList={sortList} sort={sort}/>
            </div>

            {error && <h2>Произошла ошибка {error} </h2>}

            <div className="productsNet">

                {
                    isLoading
                        ? [...new Array(8)].map((_, index) => <SkeletonProducts key={index}/>)
                        : products.filter((product) => {
                            return product.title.toLowerCase().includes(searchQuery.toLowerCase())
                        }).map(Product =>
                            <ProductItem Product={Product} key={Product.id}/>
                        )
                }

            </div>
        </div>
    );
};

export default CategoryPage;