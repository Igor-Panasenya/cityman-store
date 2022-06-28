import {useDispatch, useSelector} from "react-redux";
import {GiRazor} from "react-icons/gi";
import {GiTie} from "react-icons/gi";
import {BsWatch} from "react-icons/bs";
import Search from "../components/UI/Search/Search";
import Sort from "../components/UI/sort/Sort";
import ProductItem from "../components/productItem/ProductItem";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton/Skeleton";
import Pagination from "../components/UI/pagination/Pagination";
import {setSort} from "../redux/slices/sortSlice";
import WidgetCheckbox from "../components/UI/widgets/WidgetCheckbox";

const CategoryPage = () => {

    const category = useSelector(state => state.category.currentCategory)

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://628f86d60e69410599de1f6f.mockapi.io/${category.title}`)
            .then(response => {
                setProducts(response.data)
                setIsLoading(false)
            }).catch(function(e) {
                console.log('Ошибка')
            setIsLoading(false)
        })
    }, [])

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

    if(!category) return null

    // ВИДЖЕТЫ
    const brands = ['Casio', 'Tissot', 'Orient', 'Q&Q', 'Seiko'];
    const mechanisms = ['Wrist Watch', 'Clock set', 'Set with jewelry', 'Pocket watch'];
    const housings = ['Stainless steel', 'Plastic', 'Gold', 'Ceramics', 'Brass'];
    const braslets = ['Metal', 'Rubber', 'Leather', 'Plastic'];


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

                {/*ВИДЖЕТЫ*/}
                {/*<div className='widgets'>*/}
                {/*    <WidgetCheckbox title='Brand' items={brands}/>*/}
                {/*    <WidgetCheckbox title='Mechanism' items={mechanisms}/>*/}
                {/*    <WidgetCheckbox title='Housings' items={housings}/>*/}
                {/*    <WidgetCheckbox title='Braslet' items={braslets}/>*/}
                {/*</div>*/}

            </div>

            <div className="productsNet">

                {
                    isLoading
                        ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
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