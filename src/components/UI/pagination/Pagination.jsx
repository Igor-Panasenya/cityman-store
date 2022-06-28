import React, {useState} from 'react';
import './pagination.css'
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";

const Pagination = () => {

    const paginationList = [1,2,3,4,5,6,7]
    const clickPagination = (index) => {
        setActiveIndex(index)
    }

    const [activeIndex, setActiveIndex] = useState(0)
    const [prevDisabled, setPrevDisabled] = useState(true)
    const [nexDisabled, setNextDisabled] = useState(false)

    const prevPagination = () => {
        setActiveIndex(activeIndex - 1)
    }
    const nextPagination = () => {
        setActiveIndex(activeIndex + 1)
    }

    return (
        <div className='pagination'>
            <span
                onClick={() => prevPagination()}
                className={activeIndex === 0 ? 'arrow disabled' : 'arrow'}

            >
                <IoIosArrowBack size={20}/>
            </span>

            {
                paginationList.map((pagination, index) =>
                    <span
                    key={pagination}
                    className={activeIndex === index ? 'active' : ''}
                    onClick={() => clickPagination(index)}
                    >{pagination}</span>
                )
            }
            <span
                onClick={() => nextPagination()}
                className={activeIndex === (paginationList.length - 1) ? 'arrow disabled' : 'arrow'}
            >
                <IoIosArrowForward size={20}/>
            </span>
        </div>
    );
};

export default Pagination;