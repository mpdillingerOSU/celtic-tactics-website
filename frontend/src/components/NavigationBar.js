import React from 'react';

function NavigationBar() {
    return (
        <>
            <nav id="navbar" className="navbar">
                <button className="nav-text-button" onClick={() => {}}>NEWS</button>
                <button className="nav-text-button" onClick={() => {}}>BLOG</button>
                <button className="nav-text-button" onClick={() => {}}>WIKI</button>
                <button className="nav-logo-button" onClick={() => {}}>
                    <img className="logo" src={require("../images/logo-icon.png")} alt="logo" />
                </button>
                <button className="nav-text-button" onClick={() => {}}>DISCORD</button>
                <button className="nav-text-button" onClick={() => {}}>SUPPORT</button>
                <button className="nav-text-button" onClick={() => {}}>MERCH</button>
            </nav>
        </>
  );
}

export default NavigationBar;