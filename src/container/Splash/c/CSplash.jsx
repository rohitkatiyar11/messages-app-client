import React from 'react';
import './splash.css';
const icon = '../../../Icon.png';
export const CSplash = ({ children }) => (
    <div className="splash">
        {children}
    </div>
);

export const CImage = ({ }) => (
    <div className="splash-icon">
        <img src={icon} />
    </div>
);

