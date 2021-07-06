import React from 'react';
import Accessibility from '../Accessibility/Accessibility';

export default function Header({ theme, toggleEvent }) {
  return (
    <header>
      <Accessibility
        iconClasses='theme-icon'
        theme={theme}
        toggleEvent={toggleEvent}
      />
    </header>
  );
}
