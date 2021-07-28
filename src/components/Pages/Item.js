import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';
import ItemImage from '../Items/ItemImage';
import Quantity from '../Inputs/Quantity';
import NoMatch from './NoMatch';
import inventory from '../../inventory.json';
import StockWarning from '../Items/StockWarning';
import CartAddModal from '../Items/CartAddModal';

export default function Item() {
    const params = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [attemptCardAdd, setattemptCardAdd] = useState({
        status: false,
        message: '',
    });
    const [cartItems, dispatch] = useContext(CartDataContext);
    const lastButtonRef = useRef();

    useEffect(() => {
        document.title = item ? `${item.name} | Enbious` : 'Enbious';
    }, [item]);

    useEffect(() => {
        setItem(inventory.clothing[params.itemId]);
    }, [params]);

    useEffect(() => {
        if (!attemptCardAdd.status) {
            lastButtonRef.current.focus();
        }
    }, [attemptCardAdd]);

    // Scroll back to top of page when visiting an item's page
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [item]);

    // Remove keyboard navigation of non-modal items when modal is open.
    // Otherwise add back the keyboard navigation of non-modal items.
    useEffect(() => {
        const modalItems = Array.from(
            document.querySelectorAll('.modal-actions > *')
        );
        const tabbableItems = Array.from(
            document.querySelectorAll('a, input, button, [role="checkbox"]')
        );
        const nonModalItems = tabbableItems.filter(
            (item) => modalItems.indexOf(item) === -1
        );

        if (attemptCardAdd.status) {
            nonModalItems.forEach((item) =>
                item.setAttribute('tabIndex', '-1')
            );
        } else {
            console.log('closed');
            nonModalItems.forEach((item) =>
                item.removeAttribute('tabIndex', '-1')
            );
        }
    }, [attemptCardAdd]);

    const clearAttemptCardAdd = (e) => {
        setattemptCardAdd({
            status: false,
            message: '',
        });
    };

    const checkQuantityToStock = () => {
        const itemInCart = cartItems.filter(
            (cartItem) => cartItem.id === item.id
        );

        /*
            Check whether item exists in cart.
            Then check whether quantity in cart + quantity input exceeds stock.
            Otherwise check if quantity input exceeds stock.
        */
        if (
            (itemInCart.length &&
                itemInCart[0].quantity + quantity > itemInCart[0].stock) ||
            quantity > item.stock
        ) {
            // Return false to prevent handleCartAdd() from adding to cart
            setattemptCardAdd({
                status: true,
                message: `Unable to add ${item.name} to cart. The requested amount in addition to any in your cart exceed the ${item.stock} available.`,
            });
            return false;
        }

        setattemptCardAdd({
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
                    ref={lastButtonRef}
                >
                    Add to Cart
                </button>
                {attemptCardAdd.status ? (
                    <CartAddModal
                        attemptCardAdd={attemptCardAdd}
                        closeModal={clearAttemptCardAdd}
                    />
                ) : null}
            </div>
        </div>
    ) : (
        <NoMatch />
    );
}
