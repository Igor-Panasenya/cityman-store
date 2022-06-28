import React, {useState} from 'react';
import './header.scss';
import {NavLink} from "react-router-dom";
import LOGO from '../../img/logo.png';
import {BsBasket3} from 'react-icons/bs';
import {useSelector} from "react-redux";

const Header = () => {

    const [isActiveNavbar, setIsActiveNavbar] = useState(false);

    const {items, totalPrice} = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    const totalPriceFixed = totalPrice.toFixed(2);

    return (
        <header>
            <div className="navbar">

                    <NavLink onClick={() => window.scroll(0,0)} className="navLink" to="/">
                        <img className='logo' src={LOGO} alt="cityman"/>
                    </NavLink>

                    <ul
                        onClick={() => setIsActiveNavbar(!isActiveNavbar)}
                        className={isActiveNavbar ? "nav-menu active" : "nav-menu"}
                    >
                        <li className="nav-item">
                            <NavLink onClick={() => window.scroll(0,0)} className="navLink" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => window.scroll(0,0)} className="navLink" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="navLink">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className='cart-info'>
                                <NavLink onClick={() => window.scroll(0,0)} className="navLink navLink-basket" to="/basket">
                                    <BsBasket3 size={20}/>
                                    {items.length > 0 &&
                                        <>
                                            <span className='cart-info-count'> { totalCount } </span>
                                            <span className='cart-info-price'> $ { totalPriceFixed } </span>
                                        </>
                                    }
                                </NavLink>
                            </div>
                        </li>
                    </ul>

                    <div
                        onClick={() => setIsActiveNavbar(!isActiveNavbar)}
                        className={isActiveNavbar ? "hamburger active" : "hamburger"}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                {/*
                                <div className="searchBox">
                    <BiSearchAlt className="icon-search" size={20}/>
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="input-search"
                        type="text"
                        placeholder='Search in all products'
                    />
                    {
                        searchQuery &&
                        <IoMdClose onClick={() => setSearchQuery('')} className="icon-search-del" size={20}/>
                    }
                </div>
                */}
            </div>
        </header>
    );
};

export default Header;