import React from 'react'
import { TiSocialFacebook,TiSocialInstagram,TiSocialGithub } from "react-icons/ti";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-mealdb">
                    <span>AMAZONE PRODUCTS USED: </span>
                    <a href="https://www.amazon.com/">AMAZONE</a>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com/salah.eddine.376043" className="social"><TiSocialFacebook /></a>
                    <a href="https://www.instagram.com/salah.lok/" className="social"><TiSocialInstagram /></a>
                    <a href="https://github.com/" className="social"><TiSocialGithub /></a>
                </div>
            </div>
            <p>	&copy; salahlok@ All rights reserved</p>
        </div>
    )
}

export default Footer
