import React from 'react';
import Item from './Item';

const ItemList = ({ items, user, onBasketAdd }) => {
    const itemComponents = items.map(item => (
        <Item key={item.id} item={item} user={user} onBasketAdd={onBasketAdd} />
    ));

    return (
        <div id="item-list" >
            {itemComponents}
        </div>
    )
}

export default ItemList;