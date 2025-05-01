import React, { useEffect, useState } from 'react';
import PurchaseRow from '../components/PurchaseRow';
import { FaAngleLeft, FaAngleRight, FaCaretUp } from 'react-icons/fa';
import { RiSwordFill } from "react-icons/ri";
import { FaCrown } from "react-icons/fa6";
import { GiBarbute } from "react-icons/gi";
import { GiFluffyTrefoil } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import CaretButton from '../components/CaretButton';
import Marginalia from '../components/Marginalia';
import { screenshotData } from '../data/ScreenshotData';

function WelcomePage() {
    const [isPurchaseRowFixed, setIsPurchaseRowFixed] = useState(false);
    const [isBackToTopButtonVisible, setIsBackToTopButtonVisible] = useState(false);
    const [isHoveringFeatureArc, setIsHoveringFeatureArc] = useState(false);
    const [isHoveringFeatureBuffer, setIsHoveringFeatureBuffer] = useState(false);
    const [featureSelection, setFeatureSelection] = useState();
    const [selectedScreenshot, setSelectedScreenshot] = useState(0);

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

    function openFeatureInfo(feature) {
        setFeatureSelection(feature);
    }

    function updateFeatureHoverArc(val) {
        setIsHoveringFeatureArc(val);
    }

    function updateFeatureHoverBuffer(val) {
        setIsHoveringFeatureBuffer(val);
    }

    useEffect(() => {
        if(!(isHoveringFeatureArc || isHoveringFeatureBuffer)){
            setFeatureSelection();
        }
    }, [isHoveringFeatureArc, isHoveringFeatureBuffer]);

    function setScreenshot(e, val){
        e.preventDefault();
        setSelectedScreenshot(val);
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
                    <Marginalia imgSrc={require("../images/marginalia/morrigan.png")} alt={"morrigan"} height={"25vh"} top={"32%"} left={"-2%"} />
                    <Marginalia imgSrc={require("../images/marginalia/pattern-flowers.png")} alt={"flower pattern"} height={"35vh"} bottom={"2%"} right={"-1%"} />
                    <div className="game-trailer-header">DISCOVER ANCIENT LANDS AND BATTLE MONSTERS OF CELTIC LORE</div>
                    <div className="game-trailer-container">
                        <img className="game-trailer-mockup" src={require("../images/game-trailer-mockup.png")} alt="game trailer mockup" />
                    </div>
                </div>
                <div className="features-section">
                    <Marginalia imgSrc={require("../images/marginalia/cu-sith.png")} alt={"cu sith"} height={"25vh"} top={"7%"} left={"-1%"} />
                    <Marginalia imgSrc={require("../images/marginalia/wyvern.png")} alt={"wyvern"} height={"40vh"} top={"20%"} right={"-1%"} />
                    <Marginalia imgSrc={require("../images/marginalia/text-pattern-1.png")} alt={"text pattern"} height={"35vh"} bottom={"40%"} left={"-1%"} opacity={"85%"} />
                    <Marginalia imgSrc={require("../images/marginalia/pattern-strawberries.png")} alt={"strawberry pattern"} height={"35vh"} bottom={"2%"} left={"-1%"} mirrorX={true} />
                    <Marginalia imgSrc={require("../images/marginalia/kelpie.png")} alt={"kelpie"} height={"25vh"} bottom={"3%"} right={"-2%"} mirrorX={true} />
                    <div className="section-header-container">
                        <div className="section-header">Features</div>
                    </div>
                    <div className="feature-arc-container">
                        <div className="feature-arc" onMouseEnter={(e) => updateFeatureHoverArc(true)} onMouseLeave={(e) => updateFeatureHoverArc(false)}>
                            <div className={"feature-icon-container" + (featureSelection === "combat" ? " selected-feature" : "")} onMouseEnter={(e) => openFeatureInfo("combat")}>
                                <div className="feature-icon">
                                    <RiSwordFill />
                                </div>
                            </div>
                            <div className={"feature-icon-container" + (featureSelection === "village" ? " selected-feature" : "")} onMouseEnter={(e) => openFeatureInfo("village")}>
                                <div className="feature-icon">
                                    <FaCrown />
                                </div>
                            </div>
                            <div className={"feature-icon-container" + (featureSelection === "characters" ? " selected-feature" : "")} onMouseEnter={(e) => openFeatureInfo("characters")}>
                                <div className="feature-icon">
                                    <GiBarbute />
                                </div>
                            </div>
                            <div className={"feature-icon-container" + (featureSelection === "storylines" ? " selected-feature" : "")} onMouseEnter={(e) => openFeatureInfo("storylines")}>
                                <div className="feature-icon">
                                    <GiFluffyTrefoil />
                                </div>
                            </div>
                            <div className={"feature-icon-container" + (featureSelection === "morality" ? " selected-feature" : "")} onMouseEnter={(e) => openFeatureInfo("morality")}>
                                <div className="feature-icon">
                                    <FaBalanceScale />
                                </div>
                            </div>
                            <div className="feature-info">
                                {featureSelection === undefined && (
                                    <div className="feature-hover-text">Hover over an icon to learn more about a feature</div>
                                )}
                                {featureSelection === "combat" && (
                                    <>
                                        <div className="feature-description">
                                            <span className="feature-lead-text">Strategic Combat: </span>
                                            <span>Enjoy engaging and dynamic tactics-based combat. Choose from a variety of combat classes, lead your troops into battle, and use the environment to your advantage.</span>
                                        </div>
                                        <CaretButton text="DISCOVER MORE" />
                                    </>
                                )}
                                {featureSelection === "village" && (
                                    <>
                                        <div className="feature-description">
                                            <span className="feature-lead-text">From Nomads to Empire: </span>
                                            <span>Lead your group of nomads out of the swamps and build your empire. Upgrade buildings to improve technologies and troops. Negotiate with others to establish trade routes and obtain resources. Conquer lands to grow your presence, and spread your influence.</span>
                                        </div>
                                        <CaretButton text="DISCOVER MORE" />
                                    </>
                                )}
                                {featureSelection === "characters" && (
                                    <>
                                        <div className="feature-description">
                                            <span className="feature-lead-text">Engaging Characters: </span>
                                            <span>At the center of your journey is a small band of key characters, each with their own play styles, personalities, and storylines: Tadhg the chief and demi-god, Cormac the hulking military commander, Alastar the arcanist and druid, Moira the builder and explosives expert, and Saoirse the wildcard and jokester.</span>
                                        </div>
                                        <CaretButton text="DISCOVER MORE" />
                                    </>
                                )}
                                {featureSelection === "storylines" && (
                                    <>
                                        <div className="feature-description">
                                            <span className="feature-lead-text">Emergent Storylines: </span>
                                            <span>While the main cast of characters will remain the same every playthrough, everything else is up to change. The world and its events cannot be forseen, and the world itself will even react to your very motives and desires.</span>
                                        </div>
                                        <CaretButton text="DISCOVER MORE" />
                                    </>
                                )}
                                {featureSelection === "morality" && (
                                    <>
                                        <div className="feature-description">
                                            <span className="feature-lead-text">Conqueror or Nurturer: </span>
                                            <span>How will you be remembered? As a conqueror who struck down the wilderness around you, and brought an end to Nature's grasp on the world? Or as a nurturer whose empire became one with Nature, and found a means to live together?</span>
                                        </div>
                                        <CaretButton text="DISCOVER MORE" />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="feature-arc-buffer" onMouseEnter={(e) => updateFeatureHoverBuffer(true)} onMouseLeave={(e) => updateFeatureHoverBuffer(false)}/>
                    </div>
                </div>
                <div className="screenshots-section">
                    <Marginalia imgSrc={require("../images/marginalia/wendigo.png")} alt={"wendigo"} height={"40vh"} bottom={"7%"} left={"-3%"} />
                    <Marginalia imgSrc={require("../images/marginalia/eyeball-text.png")} alt={"eyeball with text"} height={"25vh"} top={"7%"} right={"-1%"} />
                    <div className="section-header-container">
                        <div className="section-header">Screenshots</div>
                    </div>
                    <div className="screenshot-row">
                        <button className="screenshot-rotate-button" onClick={(e) => setScreenshot(e, selectedScreenshot === 0 ? screenshotData.length - 1 : selectedScreenshot - 1)}>
                            <FaAngleLeft className="icon align-left"/>
                        </button>
                        <div className="selected-screenshot-container">
                            <img className="screenshot" src={screenshotData[selectedScreenshot]} alt="game screenshot" />
                        </div>
                        <button className="screenshot-rotate-button" onClick={(e) => setScreenshot(e, (selectedScreenshot + 1) % screenshotData.length)}>
                            <FaAngleRight className="icon align-right" />
                        </button>
                    </div>
                    <div className="screenshot-carousel">
                        <button className={"carouseled-screenshot-container" + (selectedScreenshot === 0 ? " selected-carouseled-screenshot" : "")} onClick={(e) => setScreenshot(e, 0)}>
                            <img className="screenshot" src={require("../images/screenshots/screenshot-0.png")} alt="game screenshot" />
                        </button>
                        <button className={"carouseled-screenshot-container" + (selectedScreenshot === 1 ? " selected-carouseled-screenshot" : "")} onClick={(e) => setScreenshot(e, 1)}>
                            <img className="screenshot" src={require("../images/screenshots/screenshot-1.png")} alt="game screenshot" />
                        </button>
                        <button className={"carouseled-screenshot-container" + (selectedScreenshot === 2 ? " selected-carouseled-screenshot" : "")} onClick={(e) => setScreenshot(e, 2)}>
                            <img className="screenshot" src={require("../images/screenshots/screenshot-2.png")} alt="game screenshot" />
                        </button>
                        <button className={"carouseled-screenshot-container" + (selectedScreenshot === 3 ? " selected-carouseled-screenshot" : "")} onClick={(e) => setScreenshot(e, 3)}>
                            <img className="screenshot" src={require("../images/screenshots/screenshot-3.png")} alt="game screenshot" />
                        </button>
                        <button className={"carouseled-screenshot-container" + (selectedScreenshot === 4 ? " selected-carouseled-screenshot" : "")} onClick={(e) => setScreenshot(e, 4)}>
                            <img className="screenshot" src={require("../images/screenshots/screenshot-4.png")} alt="game screenshot" />
                        </button>
                    </div>
                </div>
                <div className="newsletter-section">
                    <Marginalia imgSrc={require("../images/marginalia/wendigo.png")} alt={"wendigo"} height={"40vh"} bottom={"7%"} left={"-3%"} />
                    <Marginalia imgSrc={require("../images/marginalia/eyeball-text.png")} alt={"eyeball with text"} height={"25vh"} top={"7%"} right={"-1%"} />
                    <div className="section-header-container">
                        <div className="section-header">Newsletter</div>
                    </div>
                    <div className="newsletter-description">Want to keep yourself up to date with the latest news and updates? Then subscribe to our monthly newsletter, and get all of the information you need in one easy location!</div>
                    <button className="newsletter-button">
                        SUBSCRIBE NOW
                    </button>
                </div>
                <div className="ost-section">
                    <Marginalia imgSrc={require("../images/marginalia/merrow.png")} alt={"merrow"} height={"30vh"} top={"20%"} left={"-1%"} />
                    <Marginalia imgSrc={require("../images/marginalia/fomorian.png")} alt={"fomorian"} height={"30vh"} bottom={"12%"} right={"-1%"} />
                    <Marginalia imgSrc={require("../images/marginalia/text-pattern-3.png")} alt={"text pattern"} height={"35vh"} top={"9%"} right={"1%"} opacity={"85%"} />
                    <div className="section-header-container">
                        <div className="section-header">Soundtrack</div>
                    </div>
                    <div className="section-subheader">Enjoy our beautiful soundtrack!</div>
                    <img className="ost-mockup" src={require("../images/ost-mockup.png")} alt="ost mockup" />
                    <button className="ost-button">
                        LISTEN TO MORE
                    </button>
                </div>
                <div className="shop-section">
                    <Marginalia imgSrc={require("../images/marginalia/forest-spirit.png")} alt={"forest spirit"} height={"25vh"} top={"12%"} left={"10%"} />
                    <Marginalia imgSrc={require("../images/marginalia/werewolf.png")} alt={"werewolf"} height={"25vh"} top={"12%"} right={"10%"} />
                    <div className="section-header-container">
                        <div className="section-header">Merch</div>
                    </div>
                    <div className="section-subheader">Check out all of our merch! From t-shirts to phone cases, and so much more!</div>
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