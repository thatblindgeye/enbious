import React from 'react';
import { ReactComponent as LightThemeIcon } from '../../assets/images/icons/light_theme.svg';
import { ReactComponent as DarkThemeIcon } from '../../assets/images/icons/dark_theme.svg';

export default function Accessibility({ iconClasses, theme, toggleEvent }) {
  return (
    <div className='accessibility-container'>
      <div
        role='checkbox'
        className='theme-toggle'
        aria-checked={theme === 'dark' ? 'false' : 'true'}
        aria-label='enable light theme'
        tabIndex='0'
        onClick={toggleEvent}
        onKeyDown={toggleEvent}
      >
        {theme === 'dark' ? (
          <DarkThemeIcon className={iconClasses} />
        ) : (
          <LightThemeIcon className={iconClasses} />
        )}
      </div>
    </div>
  );
}
