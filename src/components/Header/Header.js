/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import Accessibility from '../Accessibility/Accessibility';
import HeaderNavbar from '../Navbar/HeaderNavbar';

export default function Header({ theme, toggleEvent }) {
  return (
    <header>
      <Accessibility
        iconClasses='theme-icon'
        theme={theme}
        toggleEvent={toggleEvent}
      />
      <HeaderNavbar />
    </header>
  );
}
