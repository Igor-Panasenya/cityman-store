import React from 'react';
import { Link } from 'react-router-dom';
import {GiTeamDowngrade} from "react-icons/gi";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {FiCommand} from "react-icons/fi";
import {GiConfirmed} from "react-icons/gi";

const AboutPage = () => {

    return (
        <div className="container">

            <h1>About Us <GiTeamDowngrade /> </h1>
            <div className="aboutCards">
                <div className="aboutCard">
                    <AiOutlineDollarCircle size={70}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="aboutCard">
                    <FiCommand size={70}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="aboutCard">
                    <GiConfirmed size={70}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <Link onClick={() => window.scroll(0,0)} to="/">
                <button className="btn">
                    Home
                </button>
            </Link>

        </div>
    );
};

export default AboutPage;