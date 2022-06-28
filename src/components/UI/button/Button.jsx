import React from 'react';
import './button.scss';
import {NavLink} from "react-router-dom";

const Button = ({title}) => {
    return (
        <button
            onClick={() => window.scroll(0,0)}
            className='btn'
        >
            {title}
        </button>
    );
};

export default Button;