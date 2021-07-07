import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import Shop from './components/Pages/Shop';
import githubDark from './assets/images/logos/GitHub-White-Mark-32px.png';
import githubLight from './assets/images/logos/GitHub-Black-Mark-32px.png';

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

  const githubLogo = theme === 'light' ? githubLight : githubDark;

  return (
    <Router>
      <Header theme={theme} toggleEvent={handleThemeToggle} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
      <footer>
        <a href='https://github.com/thatblindgeye' className='link'>
          <img src={githubLogo} alt='' className='github-link' />
          @thatblindgeye on GitHub
        </a>
      </footer>
    </Router>
  );
}
