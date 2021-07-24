import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';
import ItemImage from '../Cards/ItemImage';
import Quantity from '../Inputs/Quantity';
import NoMatch from './NoMatch';
import inventory from '../../inventory.json';

export default function Item() {
    const params = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [cartItems, dispatch] = useContext(CartDataContext);
    const { name, description, id, stock, price, image } = item;

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

    const compareQuantityStock = () => {
        const itemInCart = cartItems.filter(
            (cartItem) => cartItem.id === item.id
        );

        if (
            itemInCart.length &&
            itemInCart[0].quantity === itemInCart[0].stock
        ) {
            console.log(itemInCart);
            return false;
        }

        return true;
    };

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    const handleQuantityIncrement = (e) => {
        setQuantity((prevState) => {
            return prevState + 1;
        });
    };

    const handleQuantityDecrement = (e) => {
        setQuantity((prevState) => {
            return prevState - 1;
        });
    };

    const handleCartAdd = () => {
        if (!compareQuantityStock()) return;
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
                <ItemImage imageClasses='item-main-image' image={image} />
            </div>
            <div className='details-container'>
                <h1>{name}</h1>
                <div>{price}</div>
                <div className='add-cart-container'>
                    <Quantity
                        decrementEvent={handleQuantityDecrement}
                        changeEvent={handleQuantityChange}
                        incrementEvent={handleQuantityIncrement}
                        inputId={id}
                        stock={stock}
                        quantity={quantity}
                        disabled={!compareQuantityStock()}
                    />
                    <button
                        className='add-cart-btn button-contained'
                        onClick={handleCartAdd}
                        disabled={!stock || !compareQuantityStock()}
                    >
                        Add to Cart
                    </button>
                    {addedToCart ? (
                        <div className='added-alert'>Added {name} to cart!</div>
                    ) : null}
                </div>
            </div>
            <div className='description-container'>
                <h2 className='container-label'>Description</h2>
                <div className='item-description'>{description}</div>
            </div>
        </div>
    ) : (
        <NoMatch />
    );
}
