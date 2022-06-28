import React, {useEffect, useRef, useState} from 'react';
import './sort.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSort} from '../../../redux/slices/sortSlice'

const Sort = ({sortList, sort}) => {

    const dispatch = useDispatch();

    // СОСТОЯНИЕ ВИДИМОСТИ ПАНЕЛИ СОРТИРОВКИ
    const [visibleSort, setVisibleSort] = useState(false);

    // ФУНКЦИЯ ВЫБОРА ТИПА СОРТИРОВКИ
    const onSelectItem = (sortItem) => {
        dispatch(setSort(sortItem));
        setVisibleSort(false);
    }

    //  ЗАКРЫТИЕ ПАНЕЛИ СОРТИРОВКИ ПРИ КЛИКЕ ВНЕ ЕЕ ОБЛАСТИ
    const sortRef = useRef()
    const outSideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisibleSort(false);
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', outSideClick)
    }, [])


    return (
        <div ref={sortRef} className="sort">
            <div className="sortMain">
                <h4>Sort:</h4>
                <span
                    onClick={() => setVisibleSort(!visibleSort)}>
                    {sort.name}
                </span>
            </div>

            {visibleSort &&
                <div className='sortListItems'>
                    <ul>
                        {sortList.map((sortItem) =>
                            <li
                                key={sortItem.value}
                                className={sortItem.name === sort.name ? 'sortItem active' : 'sortItem'}
                                onClick={() => onSelectItem(sortItem)}
                            >
                                {sortItem.name}
                            </li>)
                        }
                    </ul>
                </div>
            }

        </div>
    );
};

export default Sort;