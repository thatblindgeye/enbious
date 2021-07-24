import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';
import ItemImage from '../Items/ItemImage';
import Quantity from '../Inputs/Quantity';
import NoMatch from './NoMatch';
import inventory from '../../inventory.json';
import StockWarning from '../Items/StockWarning';

export default function Item() {
    const params = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState({
        status: false,
        message: '',
    });
    const [cartItems, dispatch] = useContext(CartDataContext);

    useEffect(() => {
        document.title = item ? `${item.name} | Enbious` : 'Enbious';
    }, [item]);

    useEffect(() => {
        setItem(inventory.clothing[params.itemId]);
    }, [params]);

    // Remove the alert that appears after clicking "add to cart"
    useEffect(() => {
        const addToCartAlert = setTimeout(() => {
            if (addedToCart) {
                setAddedToCart({
                    status: false,
                    message: '',
                });
            }
        }, 5000);

        return () => {
            clearTimeout(addToCartAlert);
        };
    }, [addedToCart]);

    const checkQuantityToStock = () => {
        const itemInCart = cartItems.filter(
            (cartItem) => cartItem.id === item.id
        );

        /*
            Check whether item exists in cart
            Then check whether quantity in cart + quantity input exceeds stock
            Otherwise check if quantity input exceeds stock
        */
        if (
            (itemInCart.length &&
                itemInCart[0].quantity + quantity > itemInCart[0].stock) ||
            quantity > item.stock
        ) {
            // Return false to prevent handleCartAdd() from adding to cart
            setAddedToCart({
                status: true,
                message: `Unable to add ${item.name} to cart. The requested amount in addition to any in your cart exceed the ${item.stock} available.`,
            });
            return false;
        }

        setAddedToCart({
            status: true,
            message: `Added ${quantity} ${
                item.name + (quantity > 1 ? 's' : '')
            } to cart!`,
        });
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
        if (!checkQuantityToStock()) return;

        return dispatch({
            type: 'ADD_ITEM',
            payload: {
                ...item,
                quantity,
            },
        });
    };

    return item ? (
        <div className='item-container'>
            <div className='item-images'>
                <ItemImage imageClasses='item-main-image' image={item.image} />
            </div>
            <div className='details-container'>
                <h1>{item.name}</h1>
                <StockWarning id={item.id} stock={item.stock} />
                <div>{item.price}</div>
                <div className='description-container'>
                    <h2 className='container-label'>Description</h2>
                    <div className='item-description'>{item.description}</div>
                </div>
            </div>
            <div className='add-cart-container'>
                <div className='quantity-container'>
                    <label
                        htmlFor={`quantity-${item.id}`}
                        className='quantity-label'
                    >
                        Quantity{' '}
                    </label>
                    <Quantity
                        decrementEvent={handleQuantityDecrement}
                        changeEvent={handleQuantityChange}
                        incrementEvent={handleQuantityIncrement}
                        itemId={item.id}
                        stock={item.stock}
                        quantity={quantity}
                    />
                </div>

                <button
                    className='add-cart-btn button-contained elevation-04dp'
                    onClick={handleCartAdd}
                    disabled={!item.stock}
                >
                    Add to Cart
                </button>
                {addedToCart.status ? (
                    <div className='cart-add-alert'>{addedToCart.message}</div>
                ) : null}
            </div>
        </div>
    ) : (
        <NoMatch />
    );
}
