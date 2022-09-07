import React, { useEffect, useState } from 'react';
import storedItems from '../data/ShopItem';
import ItemList from '../components/ItemList';
import Header from '../components/Header';

const MainContainer = () => {
    const [user, setUser] = useState({
        name: "Jack",
        email: "jack@gmail.com",
        funds: 150,
        basket: []
    });


    const [items, setItems] = useState(storedItems);
    const [cost, setCost] = useState(0);


    const calculateCost = () => {
        const newCost = user.basket.reduce((total, item) => {
            return total + item.price;
        }, 0);
        setCost(newCost)
    }

    useEffect(calculateCost, [user])



    return (
        <div>
            <Header user={user} cost={cost} onRemoveItem={setUser} />
            <ItemList items={items} user={user} onBasketAdd={setUser} />
        </div>
    )

}

export default MainContainer;