/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from 'react';
import ItemCard from '../Cards/ItemCard';
import inventory from '../../inventory.json';

export default function Shop() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        document.title = 'Shop | Enbious';
    }, []);

    useEffect(() => {
        setItems(inventory.clothing);
    }, []);

    return (
        <div>
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}
