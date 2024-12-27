import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for navigation
import './AboutUsPage.css'; // Importing the CSS file for styling
import mangoBackground from '../../assets/differentmango.jpg'; // Importing background image
import mangoLogo from '../../assets/Logo_white.png'; // Importing mango logo
import pythonLogo from '../../assets/python.png'; // Importing Python logo
import pytorchLogo from '../../assets/pytorch.png'; // Importing PyTorch logo
import tensorflowLogo from '../../assets/tensorflow.png'; // Importing TensorFlow logo

// AboutUsPage component
function AboutUsPage() {
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    // Event handler functions for navigation
    const handleSignIn = () => { navigate('/signin'); }; // Navigate to Sign-In page
    const handleSignUp = () => { navigate('/signup'); }; // Navigate to Sign-Up page
    const handleContactUs = () => { navigate('/contactuspage'); }; // Navigate to Contact Us page
    const handleAboutUs = () => { navigate('/aboutuspage'); }; // Navigate to About Us page

    return (
        <div className="aboutus-page-container">
            
            {/* Navbar */}
            <nav className="aboutus-navbar">
                <div className="navbar-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="navbar-logo" /> {/* Mango logo in navbar */}
                </div>
                <div className="navbar-actions">
                    <button className="navbar-button" onClick={handleSignIn}>Sign-In</button> {/* Sign-In button */}
                    <button className="navbar-button" onClick={handleSignUp}>Sign-Up</button> {/* Sign-Up button */}
                </div>
            </nav>

            {/* Hero Section */}
            <header className="aboutus-hero" style={{ backgroundImage: `url(${mangoBackground})` }}>
                <h1 className="hero-title">About Us Page</h1> {/* Title in the hero section */}
            </header>

            {/* Content Section */}
            <main className="aboutus-content">
                <div className="content-section">
                    <h2 className="content-title">Mangoers</h2> {/* Section Title */}
                    <p className="content-description">
                        Mangoers Bruise Tracker, developed at Mae Fah Luang University, specializes in the detection and analysis of mango bruise areas. Leveraging advanced computer vision, deep learning (DL), and machine learning (ML) technologies, our platform enables retailers to efficiently assess mango quality. This service automates bruise detection, offering valuable insights for enhanced quality control and decision-making.
                    </p>
                </div>

                {/* Frameworks Section */}
                <section className="frameworks-section">
                    <h3 className="frameworks-title">Frameworks We Use</h3> {/* Frameworks section title */}
                    <div className="frameworks-logos">

                        {/* Python Logo */}
                        <div className="framework-item">
                            <img src={pythonLogo} alt="Python Logo" className="framework-logo" />
                            <p>Python</p> {/* Python label */}
                        </div>

                        {/* PyTorch Logo */}
                        <div className="framework-item">
                            <img src={pytorchLogo} alt="PyTorch Logo" className="framework-logo" />
                            <p>PyTorch</p> {/* PyTorch label */}
                        </div>

                        {/* TensorFlow Logo */}
                        <div className="framework-item">
                            <img src={tensorflowLogo} alt="TensorFlow Logo" className="framework-logo" />
                            <p>TensorFlow</p> {/* TensorFlow label */}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="aboutus-footer">
                <div className="footer-links">
                    <button className="footer-link" onClick={handleAboutUs}>About Us</button> {/* About Us link */}
                    <button className="footer-link" onClick={handleContactUs}>Contact Us</button> {/* Contact Us link */}
                </div>
                <p className="footer-address">Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p> {/* Footer address */}
            </footer>
        </div>
    );
}

export default AboutUsPage; // Export the AboutUsPage component
