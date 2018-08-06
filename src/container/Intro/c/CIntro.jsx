import React from 'react';
import './intro.css';
const icon = '../../../Icon.png';
export const CIntro = ({ children }) => (
    <div className="intro-page">
        {children}
    </div>
);

export const CImage = ({ }) => (
    <div className="intro-icon">
        <img src={icon} />
    </div>
);

export const CWelcomeMessage = ({ }) => (
    <div className="welcome-text">
        <p>Welcome to Messages</p>
    </div>
);

export const CText = ({ }) => (
    <div className="sms-text">
       <p>SMS your contacts</p>
    </div>
);

