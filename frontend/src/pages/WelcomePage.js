import React from 'react';

function WelcomePage() {
    return (
        <div>
            <div className="game-title-container">
                <img className="game-title" src={require("../images/game-title.png")} alt="game title" />
            </div>
            <div className="welcome-page-img-container">
                <img className="welcome-page-img" src={require("../images/welcome-page-img.png")} alt="welcome page image" />
            </div>
        </div>
    );
}

export default WelcomePage;