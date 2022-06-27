import React from 'react';
import CartItem from "../cartItem/CartItem";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const CartList = ({productsCart}) => {

    const {totalPrice} = useSelector(state => state.cart);
    const totalPriceFixed = totalPrice.toFixed(2);

    return (
        <>
            {productsCart.map(product =>
            <>
                <CartItem product={product} key={product.id}/>
                <div className='basket-hr'></div>
            </>)}

            <div className='grandTotal'>
                <p>Grand total</p>
                {totalPriceFixed} $
            </div>

            <div className='cart-btns'>
                <Link to="/">
                    <button onClick={() => window.scroll(0,0)} className="btn">
                        Home
                    </button>
                </Link>
                <button className='btn btn-checkout'>checkout</button>
            </div>


        </>
    );
};

export default CartList;