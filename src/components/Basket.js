import React from 'react';

const Basket = ({ user, onRemoveItem }) => {
    const removeItem = (itemToRemove) => {
        const updatedUser = { ...user };
        updatedUser.basket = [...user.basket];
        const index = updatedUser.basket.indexOf(itemToRemove);
        updatedUser.basket.splice(index, 1);
        onRemoveItem(updatedUser);
    };

    const basketComponents = user.basket.map(item => (
        <li>
            <hr />
            <span>
                {item.name} £{item.price}
                <img src={require("../images/" + item.image)} alt="item" />
            </span>
            <button onClick={() => removeItem(item)}>Remove</button>
        </li >
    ));

    return (
        <div id="basket-list">
            <h2>Your items: </h2>
            {user.basket.length > 0
                ? <ul >
                    {basketComponents}
                </ul>
                : <p>Basket Is Empty</p>}
        </div>
    );
};

export default Basket;