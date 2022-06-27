import React, {useCallback, useRef, useState} from 'react';
import './search.css'
import {BiSearchAlt} from 'react-icons/bi';
import {IoMdClose} from 'react-icons/io';

const Search = ({searchQuery, setSearchQuery}) => {

    const inputRef = useRef();
    const onClickClear = () => {
        setSearchQuery('');
        inputRef.current.focus();
    }

    return (
        <div className="searchBox">
            <BiSearchAlt className="icon-search" size={20}/>
            <input
                ref={inputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="searchMain"
                type="text"
                placeholder="Search by category"
            />
            <span className="icon-search-del">
                <IoMdClose style={searchQuery ? {opacity: '0.5'} : {opacity: '0'}} onClick={onClickClear} size={20}/>
            </span>
        </div>
    );
};

export default Search;