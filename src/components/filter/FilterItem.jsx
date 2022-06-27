import React, {useState} from 'react';
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import './filter.css';
import {HiOutlineMinus} from "react-icons/hi";

const FilterItem = (props) => {

    const [activeFilters, setActiveFilters] = useState(false)

    const onClickFilter = () => {
        setActiveFilters(!activeFilters)
    }

    return (
        <div className="filterItem">
            <div className="filterTitle">
                <h4>{props.title}</h4>
                <button onClick={onClickFilter} className="btnReset">
                    {activeFilters
                        ? <HiOutlineMinus size={30}/>
                        : <MdOutlineKeyboardArrowDown size={30}/>
                    }

                </button>
            </div>

            {activeFilters &&
                <ul className='filterList'>
                    <li><input type="checkbox"/><span>10..20</span></li>
                    <li><input type="checkbox"/><span>20..30</span></li>
                    <li><input type="checkbox"/><span>30..40</span></li>
                    <li><input type="checkbox"/><span>40..50</span></li>
                </ul>}
        </div>
    );
};

export default FilterItem;