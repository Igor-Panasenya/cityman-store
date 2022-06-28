import React, {useEffect, useState} from 'react';
import {BsBasket3Fill} from 'react-icons/bs'
import {BsCartPlus} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addItemCart} from "../redux/slices/cartSlice";
import MainProducts from "../components/mainProducts/MainProducts";

const ProductPage = () => {

    const product = useSelector(state => state.product.currentProduct)
    const items = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const photos = [
        `${product.IMG}`,
        '/img/productPagePhoto/sample2.jpg',
        '/img/productPagePhoto/sample3.jpg',
        '/img/productPagePhoto/sample4.jpg',
    ]

    const [getActivePhoto, setGetActivePhoto] = useState(photos[0]);
    const [activePhoto, setActivePhoto] = useState(0);
    const onSelectPhoto = (index) => {
        setActivePhoto(index);
        setGetActivePhoto(photos[index]);
    }


    // КНОПКА ДОБАВЛЕНИЯ В КОРЗИНУ
    const [isAddedCart, setIsAddedCart] = useState(product.addCart)
    const handleClickBuy = () => {
        dispatch(addItemCart(product));
        setIsAddedCart(true);
    }


    useEffect(() => {
        const findItem = items.items.find(item => item.id === product.id);
        if (findItem) {
            setIsAddedCart(true);
        }
    }, [])

    return (
        <div className='container'>
             <div className='mainInfoProduct'>
                        <div className="boxImages">
                            <div
                                style={{backgroundImage: `url(${getActivePhoto})`}}
                                className='mainIMG'
                            >
                            </div>
                            <ul className="boxImages-icons">
                                {photos.map((photo, index) => (
                                    <li
                                        key={photo}
                                        onClick={() => onSelectPhoto(index)} className={activePhoto === index ? 'active' : ''}
                                        style={{backgroundImage: `url(${photo})`}}
                                    >
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='infoProductContent'>
                            <div>
                                <h1> {product.title} </h1>
                                <h3> $ {product.price} </h3>

                                <button
                                    className=
                                        {isAddedCart ?
                                            'btn btnCart active'
                                            :
                                            'btn btnCart'
                                        }
                                    onClick={handleClickBuy}
                                    disabled={isAddedCart && 'disabled'}
                                >
                                    {isAddedCart
                                        ? <BsCartPlus size={30}/>
                                        : 'BUY'
                                    }
                                    <BsBasket3Fill className="basketIcon" style={{marginLeft: '20px'}} size={20}/>

                                </button>
                            </div>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>

            <div className="line"></div>

            <div className='characteristics-box'>
                <h2>characteristics</h2>
                <ul className='characteristics'>
                    <li><p>Lorem Ipsum</p><span> 1200 s</span> </li>
                    <li><p>Ipsum Lorem</p><span> 1300 s</span> </li>
                    <li><p>Lorem Ipsum Ipsum</p><span> 400 s</span> </li>
                    <li><p>Ipsum Lorem Lorem</p><span> 900 s</span> </li>
                    <li><p>Lorem Ipsum</p><span> 1200 s</span> </li>
                    <li><p>Ipsum Lorem</p><span> 1300 s</span> </li>
                    <li><p>Lorem Ipsum Ipsum</p><span> 400 s</span> </li>
                    <li><p>Ipsum Lorem Lorem</p><span> 900 s</span> </li>
                </ul>
            </div>

            <div className="line"></div>

            <MainProducts />

            {/*<SimilarProducts />*/}

            <div className="line"></div>

        </div>
    );
};

export default ProductPage;