import React from 'react';
import githubDark from '../../assets/images/logos/GitHub-White-Mark-32px.png';
import githubLight from '../../assets/images/logos/GitHub-Black-Mark-32px.png';

export default function Footer({ theme }) {
  const githubLogo = theme === 'light' ? githubLight : githubDark;

  return (
    <footer>
      <a href='https://github.com/thatblindgeye' className='link'>
        <img src={githubLogo} alt='' className='github-link' />
        @thatblindgeye on GitHub
      </a>
    </footer>
  );
}
