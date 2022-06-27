import React from 'react';
import './productItem.css';
import {ImPriceTag} from 'react-icons/im';
import {NavLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setProduct} from "../../redux/slices/productSlice";

const ProductItem = (props) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setProduct(props.Product))
        window.scroll(0,0)
    }

    return (
        <div className="cardProduct">

            <div
                className="mainPhotoProduct"
                style={{backgroundImage: `url(${props.Product.IMG})`}}
            >
            </div>

            <div className="cardProductContent">
                <h3> {props.Product.title} </h3>
                <div className="infoCost">
                    <ImPriceTag className="iconPrice" size={20}/>
                    <p className="cost">$ {props.Product.price}</p>

                    <NavLink to={`/categories/${props.Product.category}/${props.Product.id}-${props.Product.title}`}>
                        <button onClick={handleClick} className="btn btnBy">
                            more
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;