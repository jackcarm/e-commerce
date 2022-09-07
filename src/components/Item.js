import React from 'react';

const Item = ({ item, user, onBasketAdd }) => {
    const onCLick = () => {
        const updatedUser = { ...user };
        updatedUser.basket = [...updatedUser.basket, item];
        onBasketAdd(updatedUser);
    };

    return (
        <div className="item">
            <img src={require("../images/" + item.image)} alt="item" />
            <button onClick={onCLick}>Add to basket</button>
            <p>{item.name}</p>
            <p>£{item.price}</p>
        </div>
    )
}

export default Item;