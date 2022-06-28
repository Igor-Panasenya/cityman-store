import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='container'>
            <h1>NOT FOUND: 404 :(</h1>
            <Link onClick={() => window.scroll(0,0)} to="/">
                <button className="btn">
                    Home
                </button>
            </Link>
        </div>
    );
};

export default NotFoundPage;