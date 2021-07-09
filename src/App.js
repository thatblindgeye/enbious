import React, { useState, useEffect, useReducer } from 'react';
import Accessibility from './components/Accessibility/Accessibility';
import HeaderNavbar from './components/Navbar/HeaderNavbar';
import Router from './components/Router/Router';
import Footer from './components/Footer/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [cartItems, setCartItems] = useState([]);

  // Initialize theme from local storage or set theme in local storage
  // when App mounts
  useEffect(() => {
    let savedTheme = localStorage.getItem('theme');

    if (!localStorage.getItem('theme')) {
      savedTheme = 'dark';
      localStorage.setItem('theme', savedTheme);
    }
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      const newTheme = theme === 'dark' ? 'light' : 'dark';

      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <>
      <header>
        <Accessibility siteTheme={theme} toggleEvent={handleThemeToggle} />
        <HeaderNavbar cartItems={cartItems} />
      </header>
      <Router cartItems={cartItems} />
      <Footer siteTheme={theme} />
    </>
  );
}
