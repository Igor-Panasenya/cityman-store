import React, {useState} from 'react';
import './filter.css';
import {AiFillCloseCircle} from "react-icons/ai";
import FilterItem from "./FilterItem";
import Sort from "../sort/Sort";

const Filter = ({sortType, onChangeSort, sortList}) => {

    const [visibleSort, setVisibleSort] = useState(false);
    const activeLabel = sortList[sortType].name;

    const onSelectItem = (index) => {
        onChangeSort(index);
        setVisibleSort(false);
    }

    return (
        <div className="containerFilter">
            <div className="filterTitle">
                <h3>Filter</h3>
                <button className="btnReset" /* onClick={resetAll} */> <AiFillCloseCircle size={20} className="resetAllIcon" /> Reset All</button>
            </div>

            <div className="line"></div>

            {/* Сортировка старт */}
            <div className="sort">
                <div className="sortMain">
                    <h4>Sort:</h4>
                    <span onClick={() => setVisibleSort(!visibleSort)}>{activeLabel}</span>
                </div>

                {visibleSort &&
                    (sortList.map((sortItem, index) =>
                        <div
                            key={sortItem.value}
                            className={sortType === index ? 'sortItem active' : 'sortItem'}
                            onClick={() => onSelectItem(index)}
                        >
                            {sortItem.name}
                        </div>
                    ))}
            </div>
            {/* Сортировка конец*/}

        </div>
    );
};

export default Filter;