/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/images/icons/cart.svg';

export default function HeaderNavbar() {
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
          <Link to='/cart' className='link' aria-label='Cart'>
            <CartIcon />
            <span>0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
