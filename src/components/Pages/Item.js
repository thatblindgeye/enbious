import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';
import Quantity from '../Inputs/Quantity';
import NoMatch from './NoMatch';
import inventory from '../../inventory.json';

export default function Item() {
    const params = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [, dispatch] = useContext(CartDataContext);
    const { image } = item;

    useEffect(() => {
        document.title = item ? `${item.name} | Enbious` : 'Enbious';
    }, [item]);

    useEffect(() => {
        setItem(inventory.clothing[params.itemId]);
    }, [params]);

    useEffect(() => {
        const addedDialog = setTimeout(() => {
            if (addedToCart) {
                setAddedToCart(false);
            }
        }, 5000);

        return () => {
            clearTimeout(addedDialog);
        };
    }, [addedToCart]);

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    const handleQuantityIncrement = (e) => {
        if (quantity === item.stock) return;
        setQuantity((prevState) => {
            return prevState + 1;
        });
    };

    const handleQuantityDecrement = (e) => {
        if (quantity === 1) return;
        setQuantity((prevState) => {
            return prevState - 1;
        });
    };

    const handleCartAdd = () => {
        setAddedToCart(true);
        return dispatch({
            type: 'ADD_ITEM',
            payload: {
                ...item,
                quantity,
            },
        });
    };

    return item ? (
        <div className='item-details-container'>
            <div className='item-images'>
                <img
                    className='item-main-image'
                    src={
                        image
                            ? image
                            : `${process.env.PUBLIC_URL}/public-assets/inventory-images/unavailable.png`
                    }
                    alt=''
                />
            </div>
            <div className='item-details'>
                <h1>{item.name}</h1>
                <div className='item-description'>{item.description}</div>
                <Quantity
                    decrementEvent={handleQuantityDecrement}
                    changeEvent={handleQuantityChange}
                    incrementEvent={handleQuantityIncrement}
                    inputId={item.id}
                    stock={item.stock}
                    quantity={quantity}
                />
                <button className='add-cart-btn' onClick={handleCartAdd}>
                    Add to Cart
                </button>
                {addedToCart ? (
                    <div className='added-dialog'>
                        Added {item.name} to Cart
                    </div>
                ) : null}
            </div>
        </div>
    ) : (
        <NoMatch />
    );
}
