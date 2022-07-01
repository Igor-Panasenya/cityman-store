import React from 'react';
import {
    CSSTransition,
    TransitionGroup,
    Transition,
} from 'react-transition-group';
import CartItem from "../cartItem/CartItem";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './cartList.scss';
import './transition.css';
import Button from "../../UI/button/Button";

const CartList = ({productsCart}) => {

    const {totalPrice} = useSelector(state => state.cart);
    const totalPriceFixed = totalPrice.toFixed(2);

    return (
        <>
            <TransitionGroup>
                {productsCart.map(product =>
                <>
                    <CSSTransition
                        key={product.id}
                        timeout={500}
                        classNames="product"
                    >
                        <CartItem product={product}/>

                    </CSSTransition>
                    <div className='cart-hr'></div>
                </>)}
            </TransitionGroup>

            <div className='grandTotal'>
                <p>Grand total</p>
                {totalPriceFixed} $
            </div>

            <div className='cart-btns'>
                <Link to="/">
                    <Button title='Home'/>
                </Link>
                <button className='btn btn-checkout'>checkout</button>
            </div>
        </>
    );
};

export default CartList;