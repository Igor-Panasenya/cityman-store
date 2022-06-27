import React from 'react';
import {Link} from "react-router-dom";

const Btn = ({title}) => {
    return (
        <div>
            <Link to={`categories/${title}`}>
                <button onClick={() => window.scroll(0,0)} className="btn"> CATALOG </button>
            </Link>
        </div>
    );
};

export default Btn;