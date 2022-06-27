import React from 'react';
import './btnLearnMore.css';
import {NavLink} from "react-router-dom";

const BtnLearnMore = (props) => {
    return (
        <div>
            <NavLink to="/about">
                <button onClick={() => window.scroll(0,0)} className='btn'> {props.title} </button>
            </NavLink>
        </div>
    );
};

export default BtnLearnMore;