import React from 'react';
import './footer.scss';
import Logo from '../../img/footer/logo-black.png';

const Footer = () => {
    return (
        <footer id='contact'>
            <div className="footerInfo">
                <img src={Logo} alt="cityman"/>
                    <p>gywpo@mailto.plus</p>
                    <p>+1-705-750-7827</p>
                    <p>523 Garfield St, Lander<br/>WY 82520, USA</p>
                    <p>© copyright</p>
            </div>
        </footer>
    );
};

export default Footer;