import React from 'react';
import githubDark from '../../assets/images/logos/GitHub-White-Mark-32px.png';
import githubLight from '../../assets/images/logos/GitHub-Black-Mark-32px.png';

export default function Footer({ siteTheme }) {
    const githubLogo = siteTheme === 'light' ? githubLight : githubDark;

    return (
        <footer>
            <div className='upper-footer-nav'>
                <a href='#' className='link'>
                    Back to Top
                </a>
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
