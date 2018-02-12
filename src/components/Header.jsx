import React from 'react';

const Header = () => (
    <header className="App-header">
        <h1 className="App-title">We are going to Belfast!</h1>
        <div className="image-container">
                <img className="App-image" src={ require('../NI.png') } alt="flag" />
        </div>
        <h2 className="App-subtitle">(soon)</h2>
    </header>
);

export default Header;
