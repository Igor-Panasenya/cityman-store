import React from 'react';
import WidgetCheckbox from "./widgetCheckbox/WidgetCheckbox";

const Widgets = () => {

    const brands = ['Casio', 'Tissot', 'Orient', 'Q&Q', 'Seiko'];
    const mechanisms = ['Wrist Watch', 'Clock set', 'Set with jewelry', 'Pocket watch'];
    const housings = ['Stainless steel', 'Plastic', 'Gold', 'Ceramics', 'Brass'];
    const braslets = ['Metal', 'Rubber', 'Leather', 'Plastic'];

    return (
        <div className='widgets'>
            <WidgetCheckbox title='Brand' items={brands}/>
            <WidgetCheckbox title='Mechanism' items={mechanisms}/>
            <WidgetCheckbox title='Housings' items={housings}/>
            <WidgetCheckbox title='Braslet' items={braslets}/>
        </div>
    );
};

export default Widgets;