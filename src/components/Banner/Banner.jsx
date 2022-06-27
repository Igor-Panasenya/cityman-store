import React from 'react';
import './banner.css';
import BtnLearnMore from "./BtnLearnMore";

const Banner = () => {
    return (
        <div className="container">
            <div className="banner">
                <div className="banner-content">
                    <h1>Cityman</h1>
                    <p>store for real men</p>
                    <BtnLearnMore title='LEARN MORE'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;