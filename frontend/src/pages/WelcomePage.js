import React from 'react';

function WelcomePage() {
    return (
        <div>
            <div className="game-title-container">
                <img className="game-title" src={require("../images/game-title.png")} alt="game title" />
            </div>
        </div>
    );
}

export default WelcomePage;