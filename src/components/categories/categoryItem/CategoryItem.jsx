import React from 'react';
import './categoryItem.scss';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCategory} from "../../../redux/slices/categorySlice";

const CategoryItem = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        window.scroll(0,0)
        dispatch(setCategory(props.category))
    }

    return (
        <div className="card-categories"  style={{background: `url(${props.category.bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="card-categories-content">
                <h2>{props.category.title}</h2>

                <Link to={`/categories/${props.category.title}`}>
                    <button onClick={handleClick} className="btn"> CATALOG </button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryItem;