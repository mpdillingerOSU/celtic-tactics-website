import React, { useState } from 'react';
import PurchaseRow from '../components/PurchaseRow';
import { FaCaretUp } from 'react-icons/fa';

function WelcomePage() {
    const [isPurchaseRowFixed, setIsPurchaseRowFixed] = useState(false);
    const [isBackToTopButtonVisible, setIsBackToTopButtonVisible] = useState(false);

    function isPurchaseRowOffScreen() {
        const element = document.getElementById("purchase-row");
        return element !== undefined && element.getBoundingClientRect().y < 0;
    }

    function isNavBarOffScreen() {
        const element = document.getElementById("navbar");
        return element !== undefined && element.getBoundingClientRect().y + element.clientHeight < 0;
    }

    function checkScrollEvents() {
        if(isPurchaseRowOffScreen()) {
            setIsPurchaseRowFixed(true);
        } else {
            setIsPurchaseRowFixed(false);
        }

        if(isNavBarOffScreen()) {
            setIsBackToTopButtonVisible(true);
        } else {
            setIsBackToTopButtonVisible(false);
        }
    }
        
    window.addEventListener("scroll", function() {
        checkScrollEvents();
    }, true);
    
    window.addEventListener("resize", function() {
        checkScrollEvents();
    });

    function backToTop() {
        document.getElementById("navbar").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }

    return (
        <div id="welcome-page">
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
            <div className="ost-section">
                <div className="ost-header">Enjoy our beautiful soundtrack!</div>
                <img className="ost-mockup" src={require("../images/ost-mockup.png")} alt="ost mockup" />
                <button className="see-more-button">
                    SEE MORE
                </button>
            </div>
            <div className="shop-section">
                <div className="shop-header">Checkout our merch!</div>
                <img className="shop-img" src={require("../images/shop-img.png")} alt="shop image" />
                <button className="see-more-button">
                    VISIT STORE
                </button>
            </div>
            <div className="decorative-divider" />
            {isBackToTopButtonVisible && (
                <div className="back-to-top-button-container">
                    <button className="back-to-top-button" onClick={() => backToTop()}>
                        <FaCaretUp />
                    </button>
                </div>
            )}
        </div>
    );
}

export default WelcomePage;