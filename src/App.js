import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import githubDark from './assets/images/logos/GitHub-White-Mark-32px.png';
import githubLight from './assets/images/logos/GitHub-Black-Mark-32px.png';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Initialize theme from local storage or set theme in local storage
  // when component mounts
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
    <>
      <Header theme={theme} toggleEvent={handleThemeToggle} />
      <footer>
        <a href='https://github.com/thatblindgeye' className='link'>
          <img src={githubLogo} alt='' className='image-link' />
          @thatblindgeye on GitHub
        </a>
      </footer>
    </>
  );
}
