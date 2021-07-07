import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Router from './components/Router/Router';
import Footer from './components/Footer/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Initialize theme from local storage or set theme in local storage
  // when app mounts
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header theme={theme} toggleEvent={handleThemeToggle} />
      <Router />
      <Footer theme={theme} />
    </BrowserRouter>
  );
}
