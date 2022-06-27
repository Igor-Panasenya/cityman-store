import React from 'react';
import {BsBasketFill} from "react-icons/bs";
import {HiOutlineTrash} from "react-icons/hi";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, removeItemCart} from "../redux/slices/cartSlice";
import CartList from "../components/cartList/CartList";
import {BsFillCartXFill} from "react-icons/bs";
import {FaFrownOpen} from "react-icons/fa";

const CartPage = () => {

    const productsCart = useSelector(state => state.cart.items)

    // ОЧИСТКА КОРЗИНЫ
    const dispatch = useDispatch()
    const delBasketItem = () => {
        dispatch(clearCart())
    }

    return (
        <div className="container">
            <h1>Basket <BsBasketFill size={50}/> </h1>

            <button
                className={productsCart.length > 0 ? 'btn-clearBasket' : 'btn-clearBasket disabled'}
                onClick={delBasketItem}
                disabled={productsCart.length > 0 ? '' : 'disabled'}
            >
                <HiOutlineTrash />
                Clear basket
            </button>

            <div className="basket-content">

                {productsCart.length !== 0
                    ? <CartList productsCart={productsCart}/>
                    : <div className="cart-empty">
                        <h3>Your cart is empty <FaFrownOpen /></h3>
                        <BsFillCartXFill size={200}/>
                        <Link to="/">
                            <div onClick={() => window.scroll(0,0)} className="cart-GoHome">
                                Go home
                            </div>
                        </Link>
                      </div>
                }

            </div>
        </div>
    );
};

export default CartPage;