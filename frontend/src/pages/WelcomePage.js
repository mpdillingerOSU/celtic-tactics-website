import React, { useState } from 'react';
import PurchaseRow from '../components/PurchaseRow';

function WelcomePage() {
    const [isPurchaseRowFixed, setIsPurchaseRowFixed] = useState(false);

    function isPurchaseRowOffScreen() {
        const element = document.getElementById("purchase-row");
        const yVal = element.getBoundingClientRect().y;
        console.log(yVal);
        return element !== undefined && yVal < 0;
    }
        
    window.addEventListener("scroll", function() {
        if (isPurchaseRowOffScreen()) {
            setIsPurchaseRowFixed(true);
        } else {
            setIsPurchaseRowFixed(false);
        }
    }, true);
    
    window.addEventListener("resize", function() {
        if (isPurchaseRowOffScreen()) {
            setIsPurchaseRowFixed(true);
        } else {
            setIsPurchaseRowFixed(false);
        }
    });

    return (
        <div>
            <div className="game-title-container">
                <img className="game-title" src={require("../images/game-title.png")} alt="game title" />
            </div>
            <div className="welcome-page-img-container">
                <img className="welcome-page-img" src={require("../images/welcome-page-img.png")} alt="welcome page image" />
                <PurchaseRow optionalClass={isPurchaseRowFixed ? "hidden-purchase-row" : "standard-purchase-row"} />
            </div>
            {isPurchaseRowFixed && (
                <PurchaseRow optionalClass={isPurchaseRowFixed ? "fixed-purchase-row" : ""} />
            )}
            <div className="decorative-divider" />
            <div className="game-trailer-section">
                <div className="game-trailer-header">DISCOVER ANCIENT LANDS AND BATTLE MONSTERS OF CELTIC LORE</div>
                <img className="game-trailer-mockup" src={require("../images/game-trailer-mockup.png")} alt="game trailer mockup" />
            </div>
            <div className="decorative-divider" />
            <div className="welcome-blurb-section">
                Hello, hello!
            </div>
        </div>
    );
}

export default WelcomePage;