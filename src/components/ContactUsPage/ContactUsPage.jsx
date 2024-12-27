import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUsPage.css';
import mangoBackground from '../../assets/differentmango.jpg';
import mangoLogo from '../../assets/Logo_white.png';
import pythonLogo from '../../assets/instagram.png';
import pytorchLogo from '../../assets/x.png';
import tensorflowLogo from '../../assets/facebook.png';

function ContactUsPage() {
    const navigate = useNavigate(); // useNavigate hook for navigation between pages

    // Event handlers for different navigation actions
    const handleSignIn = () => { navigate('/signin'); };
    const handleSignUp = () => { navigate('/signup'); };
    const handleAboutUs = () => { navigate('/aboutuspage'); };
    const handleContactUs = () => { navigate('/contactuspage'); };
    const handleFacebookClick = () => { window.open("https://www.facebook.com/IntegratedAgriTechEcosystem", "_blank"); };

    return (
        <div className="contactus-page-container">

            {/* Navbar Section */}
            <nav className="contactus-navbar">
                <div className="navbar-brand">
                    {/* Logo in the navbar */}
                    <img src={mangoLogo} alt="Mango Logo" className="navbar-logo" />
                </div>
                <div className="navbar-actions">
                    {/* Sign-In and Sign-Up buttons */}
                    <button className="navbar-button" onClick={handleSignIn}>Sign-In</button>
                    <button className="navbar-button" onClick={handleSignUp}>Sign-Up</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="contactus-hero" style={{ backgroundImage: `url(${mangoBackground})` }}>
                <h1 className="hero-title">Contact Us</h1>
            </header>

            {/* Content Section */}
            <main className="contactus-content">
                <div className="content-section">
                    <h2 className="content-title">How can we help you?</h2>
                    <p className="content-description">
                        Purpose
                        The "Need Help?" section serves as a quick-access area for users seeking support or information. It's a critical component for building trust and encouraging engagement by providing clear communication channels.
                    </p>
                </div>

                {/* Frameworks Section */}
                <section className="frameworks-section">
                    <h3 className="frameworks-title">Contact Us</h3>
                    <div className="frameworks-logos">

                        {/* Instagram */}
                        <div className="framework-item">
                            <img src={pythonLogo} alt="Instagram Logo" className="framework-logo" />
                            <p>Instagram</p>
                        </div>

                        {/* X */}
                        <div className="framework-item">
                            <img src={pytorchLogo} alt="X Logo" className="framework-logo" />
                            <p>X</p>
                        </div>

                        {/* Facebook */}
                        <div className="framework-item" onClick={handleFacebookClick}>
                            <img src={tensorflowLogo} alt="Facebook Logo" className="framework-logo" />
                            <p>Facebook</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="contactuspage-footer">
                <div className="footer-links">
                    {/* About Us and Contact Us links in the footer */}
                    <button className="footer-link" onClick={handleAboutUs}>About Us</button>
                    <button className="footer-link" onClick={handleContactUs}>Contact Us</button>
                </div>
                <p className="footer-address">Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
            </footer>
        </div>
    );
}

export default ContactUsPage;
