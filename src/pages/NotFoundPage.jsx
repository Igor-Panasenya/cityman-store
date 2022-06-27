import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            Страница не найдена !
            <Link onClick={() => window.scroll(0,0)} to="/">
                <button className="btn">
                    Home
                </button>
            </Link>
        </div>
    );
};

export default NotFoundPage;