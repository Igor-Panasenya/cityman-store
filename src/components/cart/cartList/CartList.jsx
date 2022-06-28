import React from 'react';
import CartItem from "../cartItem/CartItem";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './cartList.scss';
import Button from "../../UI/button/Button";

const CartList = ({productsCart}) => {

    const {totalPrice} = useSelector(state => state.cart);
    const totalPriceFixed = totalPrice.toFixed(2);

    return (
        <>
            {productsCart.map(product =>
            <>
                <CartItem product={product} key={product.id}/>
                <div className='cart-hr'></div>
            </>)}

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