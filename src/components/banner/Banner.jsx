import React from 'react';
import './banner.scss';
import Button from "../UI/button/Button";
import {NavLink} from "react-router-dom";

const Banner = () => {
    return (
        <section className="container">
            <div className="banner">
                <div className="banner-content">
                    <h1>Cityman</h1>
                    <p>store for real men</p>

                    <NavLink to="/about">
                        <Button title='LEARN MORE'/>
                    </NavLink>

                </div>
            </div>
        </section>
    );
};

export default Banner;