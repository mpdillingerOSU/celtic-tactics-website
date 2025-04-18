import React from 'react';
import { FaDiscord, FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function AppFooter() {
    return (
        <footer className="app-footer">
            <div className="app-footer-body">
                <div className="app-footer-left-column">
                    <div className="app-footer-game-title-container">
                        <img className="app-footer-game-title" src={require("../images/game-title.png")} alt="game title" />
                    </div>
                    <div className="app-footer-social-media-link-row">
                        <div className="app-footer-social-media-link-container">
                            <FaXTwitter className="app-footer-social-media-link"/>
                        </div>
                        <div className="app-footer-social-media-link-container">
                            <FaDiscord className="app-footer-social-media-link"/>
                        </div>
                        <div className="app-footer-social-media-link-container">
                            <FaInstagram className="app-footer-social-media-link"/>
                        </div>
                        <div className="app-footer-social-media-link-container">
                            <FaFacebookSquare className="app-footer-social-media-link"/>
                        </div>
                        <div className="app-footer-social-media-link-container">
                            <FaYoutube className="app-footer-social-media-link"/>
                        </div>
                    </div>
                </div>
                <div className="app-footer-right-column">
                    <div className="app-footer-language-container">
                        <label htmlFor="languages">Language:</label>
                        <select className="app-footer-language-select" name="languages" id="languages">
                            <option value="english">English</option>
                            <option value="german">Deutsch</option>
                            <option value="spanish (spain)">Español &#40;España&#41;</option>
                            <option value="spanish (latin america)">Español &#40;Latinoamérica&#41;</option>
                            <option value="french">Français</option>
                            <option value="italian">Italiano</option>
                            <option value="portuguese (brazil)">Português &#40;Brasil&#41;</option>
                            <option value="japanese">日本語</option>
                            <option value="korean">한국인</option>
                            <option value="chinese (traditional)">繁體中文</option>
                        </select>
                    </div>
                    <div className="app-footer-subscribe-text">
                        Sign up for our newsletter!
                    </div>
                    <button className="app-footer-subscribe-button">SUBSCRIBE</button>
                </div>
            </div>
            <div className="app-footer-underlined-text-button-row">
                <div className="app-footer-underlined-text-button">
                    PRIVACY NOTICE
                </div>
                <div className="app-footer-underlined-text-button">
                    TERMS OF USE
                </div>
                <div className="app-footer-underlined-text-button">
                    CUSTOMER SERVICE
                </div>
                <div className="app-footer-underlined-text-button">
                    FORUMS
                </div>
            </div>
            <div className="app-footer-legal-disclaimer">Products, contents, features, etc. subject to changes.</div>
            <div className="app-footer-legal-disclaimer">Screenshots and footage are from a product in development and not final.</div>
            <div className="app-footer-copyright">&copy; {new Date().getFullYear()} Michael Dillinger. All rights reserved.</div>
        </footer>
    );
}

export default AppFooter;