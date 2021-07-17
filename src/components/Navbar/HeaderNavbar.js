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
      <ul role='list'>
        <li>
          <Link to='/' className='link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/shop' className='link'>
            Shop
          </Link>
        </li>
        <li>
          <Link to='/cart' className='link' aria-label='Shopping cart'>
            <CartIcon className='cart-icon' />
            <span className='current-cart-amount'>{totalCartItems}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
