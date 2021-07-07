import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleSwitch = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;

  .icon {
    width: 30px;
    height: auto;
    color: #f2c94c;
    transition: color 0.2s linear;
  }

  .icon:hover {
    color: #f6c11f;
  }

  .icon.moon {
    color: white;
    opacity: 0.6;
    transition: opacity 0.2s linear, color 0.2s linear;
  }

  .icon.moon:hover {
    color: white;
    opacity: 0.8;
  }

  .rays {
    transition: opacity 0.2s linear 0.2s;
  }

  .moon .rays {
    transition: opacity 0.2s linear;
    opacity: 0;
  }

  .cut-out {
    transition: transform 0.5s cubic-bezier(0.54, -0.42, 0.29, 1.3);
  }

  .moon .cut-out {
    transform: translateX(-30%);
    transition: transform 0.5s cubic-bezier(0.21, 0.17, 0.43, 1.43);
  }
`;

function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (e) => {
    document.body.classList.toggle('dark-mode');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ToggleSwitch aria-hidden="true" type="button" onClick={handleClick}>
      <svg
        className={`icon ${isDarkMode ? 'moon' : ''}`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle className="cut-out" r="6" cx="24" cy="10" fill="black" />
          </mask>
        </defs>
        <circle
          className="circle"
          r="6"
          cx="12"
          cy="12"
          fill="currentColor"
          mask="url(#mask)"
        />
        <g
          className="rays"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="12" x2="12" y1="3" y2="1" />
          <line x1="21" x2="23" y1="12" y2="12" />
          <line x1="12" x2="12" y1="21" y2="23" />
          <line x1="1" x2="3" y1="12" y2="12" />
        </g>
        <g
          className="rays"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          transform="rotate(45 12 12)"
        >
          <line x1="12" x2="12" y1="3" y2="1" />
          <line x1="21" x2="23" y1="12" y2="12" />
          <line x1="12" x2="12" y1="21" y2="23" />
          <line x1="1" x2="3" y1="12" y2="12" />
        </g>
      </svg>
    </ToggleSwitch>
  );
}

export default DarkModeSwitch;
