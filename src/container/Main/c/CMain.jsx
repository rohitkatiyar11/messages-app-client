import React from 'react';
import './main.css';

export const CMain = ({ children }) => (
    <div className="main-page">
        {children}
    </div>
);
export const Tabs = ({ children }) => (
    <div className="tabs">
        {children}
    </div>
);

export const TabItems = ({ children }) => (
    <div className="tabItems">
        {children}
    </div>
);
export const Tab = ({type, name, active, handleChange}) => {
    const className = active ? 'active' : '';

    return (
        <div className="tab">
            <a className={className} onClick={handleChange}>{name} {name == 'chat' ? <span>100</span> : ''} </a>
        </div>
    );
}

export const Search = ({}) => (
    <div className="search">
        <input type="search" name="search" placeholder="Search" />
    </div>
);

export const Item = ({name, serial, text, handleClick}) => {
       return (
        <ul onClick={handleClick}>
            <li>{name}</li>
            <li>{text}</li>
        </ul>
    )
};

export const ChatDetails = ({ children }) => (
    <div className="chat-details">
        {children}
    </div>
);
export const BackToPage = ({text, handleClick}) => {
    return (
        <div className="tab">
           <p className="backToPage" onClick={handleClick}> {text}</p>
        </div>
    );
}