import React, {useState} from 'react';
import './widgetCheckbox.css';

const WidgetCheckbox = ({title, items=[]}) => {

    const [isVisiblePopup, setIsVisiblePopup] = useState(false)

    return (
        <div className={isVisiblePopup ? 'widget-checkbox active' : 'widget-checkbox'}>
            <div onClick={() => setIsVisiblePopup(!isVisiblePopup)} className='widget-checkbox-title'>
                {title}
            </div>
            <div className='widget-checkbox-body'>
                {items.map(item =>

                        <label key={item} className='checkbox-group'>
                            <input type="checkbox" className='checkbox__real'/>
                            <span className='checkbox__fake'></span>
                            <span className='checkbox__title'>{item}</span>
                        </label>

                )}
            </div>
        </div>
    );
};

export default WidgetCheckbox;