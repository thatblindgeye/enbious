/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/images/icons/cart.svg';
import { CartDataContext } from '../../context/CartDataContext';
import { sumQuantities } from '../../scripts/utilities';

export default function HeaderNavbar() {
    const [cartItems] = useContext(CartDataContext);
    const totalCartItems = sumQuantities(cartItems);

    return (
        <nav className='header-nav' aria-label='main navigation'>
            <Link to='/' className='logo-link'>
                Enbious
            </Link>
            <Link to='/shop' className='nav-link shop-link'>
                Shop
            </Link>

            <Link
                to='/cart'
                className='nav-link cart-link'
                aria-label='Shopping cart'
            >
                <CartIcon className='cart-icon' />
                <span className='current-cart-amount'>{totalCartItems}</span>
            </Link>
        </nav>
    );
}
