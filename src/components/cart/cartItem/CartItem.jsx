import React from 'react';
import './cartItem.scss'
import {TiDelete} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {removeItemCart, addCount, removeCount} from "../../../redux/slices/cartSlice";
import {NavLink} from "react-router-dom";
import {setProduct} from "../../../redux/slices/productSlice";

const CartItem = ({product}) => {

    const dispatch = useDispatch()

    // ДОБАВЛЕНИЕ +1 КОЛИЧЕСТВА ТОВАРА В КОРЗИНЕ
    const addCountItem = () => {
        dispatch(addCount(product))
    }
    // УДАЛЕНИЕ -1 КОЛИЧЕСТВА ТОВАРА В КОРЗИНЕ
    const delCountItem = () => {
        dispatch(removeCount(product))
    }

    // УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
    const delCartItem = () => {
        dispatch(removeItemCart(product));
    }

    // ОКРУГЛЕНИЕ СТОИМОСТИ
    const priceItemFixed = (product.price * product.count).toFixed(2);
    const handleClick = () => {
        dispatch(setProduct(product));
        window.scroll(0,0);
    }

    return (
        <div className='cartItem'>
            <div className='cartItem-info'>
                <span style={{backgroundImage: `url(${product.IMG})`}}></span>

                <NavLink to={`/categories/${product.category}/${product.id}-${product.title}`}>
                    <h4 onClick={handleClick}>{product.title}</h4>
                </NavLink>

            </div>
            <div className='cartItem-add-del'>
                <button
                    disabled={product.count == 1 ? 'disabled' : ''}
                    onClick={delCountItem}
                    className={product.count == 1 ? 'btn-add-del disabled' : 'btn-add-del'}
                >
                    -
                </button>
                <p>{product.count}</p>
                <button
                    onClick={addCountItem}
                    className='btn-add-del'
                >
                    +
                </button>
            </div>
            <div className='cartItem-price'>
                {priceItemFixed} $
            </div>
            <TiDelete
                size={40}
                className='cartItem-delete'
                onClick={delCartItem}
            />
        </div>
    );
};

export default CartItem;