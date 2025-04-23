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
            <div className="main-content">
                <div className="game-trailer-section">
                    <div className="game-trailer-header">DISCOVER ANCIENT LANDS AND BATTLE MONSTERS OF CELTIC LORE</div>
                    <img className="game-trailer-mockup" src={require("../images/game-trailer-mockup.png")} alt="game trailer mockup" />
                </div>
                <div className="features-section">
                    <div className="features-description">
                        <span className="features-lead-text">Strategic Combat: </span>
                        <span>Enjoy engaging and dynamic tactics-based combat. Choose from a variety of combat classes, lead your troops into battle, and use the environment to your advantage.</span>
                    </div>
                    <div className="features-description">
                        <span className="features-lead-text">From Nomads to Empire: </span>
                        <span>Lead your group of nomads out of the swamps and build your empire. Upgrade buildings to improve technologies and troops, negotiate with others to establish trade routes and obtain resources, and conquer lands to grow your presence.</span>
                    </div>
                    <div className="features-description">
                        <span className="features-lead-text">Engaging Characters: </span>
                        <span>At the center of your journey are a small band of key characters: Tadhg the chief and demi-god, Cormac the hulking military leader, Alastar the arcanist and druid, Moira the builder and explosives expert, and Saoirse the wildcard and jokester. Each with their own play styles, personalities, and storylines.</span>
                    </div>
                    <div className="features-description">
                        <span className="features-lead-text">Emergent Storylines: </span>
                        <span>While the main cast of characters will remain the same, everything else is up to change. The world and its events cannot be forseen, and the world itself will even react to your very motives and desires.</span>
                    </div>
                    <div className="features-description">
                        <span className="features-lead-text">Conqueror or Nurturer: </span>
                        <span>How will you be remembered? As a conqueror who struck down the wilderness around you, and brought an end to nature's grasp on the world? Or as a nurturer whose empire became one with nature, and found a means to live together?</span>
                    </div>
                </div>
                <div className="ost-section">
                    <div className="ost-header">Enjoy our beautiful soundtrack!</div>
                    <img className="ost-mockup" src={require("../images/ost-mockup.png")} alt="ost mockup" />
                    <button className="ost-button">
                        LISTEN TO MORE
                    </button>
                </div>
                <div className="shop-section">
                    <div className="shop-header">Checkout our merch!</div>
                    <div className="shop-row">
                        <img className="shop-img" src={require("../images/shop-img.png")} alt="shop image" />
                        <button className="shop-button">
                            VISIT STORE
                        </button>
                    </div>
                </div>
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