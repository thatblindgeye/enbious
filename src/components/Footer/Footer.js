import React from 'react';
import githubDark from '../../assets/images/logos/GitHub-White-Mark-32px.png';
import githubLight from '../../assets/images/logos/GitHub-Black-Mark-32px.png';

export default function Footer({ siteTheme }) {
    const githubLogo = siteTheme === 'light' ? githubLight : githubDark;

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer>
            <div className='upper-footer-nav'>
                <button className='button-text' onClick={handleClick}>
                    Back to Top
                </button>
            </div>
            <div className='lower-footer-nav'>
                <a
                    href='https://github.com/thatblindgeye'
                    className='github-link'
                >
                    <img
                        src={githubLogo}
                        alt='thatblindgeye on GitHub'
                        className='github-link-image'
                    />
                </a>
            </div>
        </footer>
    );
}
