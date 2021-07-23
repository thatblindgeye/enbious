import React, { useState, useEffect, useRef } from 'react';
import { CartDataContextProvider } from './context/CartDataContext';
import Accessibility from './components/Accessibility/Accessibility';
import HeaderNavbar from './components/Navbar/HeaderNavbar';
import Router from './components/Router/Router';
import Footer from './components/Footer/Footer';

export default function App() {
    const [theme, setTheme] = useState('dark');
    const topOfPage = useRef(null);

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
        <CartDataContextProvider>
            <header>
                <Accessibility
                    siteTheme={theme}
                    toggleEvent={handleThemeToggle}
                    topRef={topOfPage}
                />
                <HeaderNavbar />
            </header>
            <Router />
            <Footer siteTheme={theme} topRef={topOfPage} />
        </CartDataContextProvider>
    );
}
