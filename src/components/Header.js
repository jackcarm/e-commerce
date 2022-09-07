import React, { useState } from 'react';
import Basket from './Basket';

const Header = ({ user, cost, onRemoveItem }) => {
    const [basketActive, setBasketActive] = useState(false);


    const onClick = () => {
        setBasketActive(!basketActive);
    };

    return (
        <header>
            <hgroup>
                <h1>SKR</h1>

            </hgroup>
            <div id="user-info">
                <h3>Welcome back {user.name}</h3>
                <h4>You have {user.basket.length} items in your basket</h4>
                <button onClick={onClick}>Go to basket</button>
                {basketActive && <Basket user={user} onRemoveItem={onRemoveItem} />}
                <p>Cost: £{cost}</p>

            </div>
        </header>
    )





}

export default Header;