import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewPhotoResults.css';
import mangoLogo from '../../assets/Logo_white.png';
import mangoData1 from '../../assets/MangoData1.png';
import mangoData2 from '../../assets/MangoData2.png';
import userProfileImg from '../../assets/profile.jpg';

const ViewPhotoResults = () => {
    const navigate = useNavigate();

    // Array of images with details
    const images = [
        {
            src: mangoData1,
            alt: "Mango 1",
            info: "Fruit Areas: 142564 sq-pixels | Bruised Area: 23 sq-pixels | Photo: Mango1.png W: 1653 x H: 840",
        },
        
        {
            src: mangoData2,
            alt: "Mango 2",
            info: "Fruit Areas: 152654 sq-pixels | Bruised Area: 30 sq-pixels | Photo: Mango2.png W: 1653 x H: 840",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigation functions for pictures
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Navigation handlers
    const handleAboutUs = () => navigate('/aboutuspage');
    const handleContactUs = () => navigate('/contactuspage');
    const handleUserProfile = () => navigate('/userprofilepage');
    const handleBack = () => navigate('/bruiseareacalculation');
    const handleDashboard = () => navigate('/dashboardpage');
    const handleBruiseAreaCalculation = () => navigate('/bruiseareacalculation');
    const handleFeatureAnalysis = () => navigate('/featureanalysis');
    const handleResize = () => {navigate('/resize')}
    const handleRemoveBackground = () => navigate('/removebackground');

    return (
        <div className="view-photo-result-page">

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="mango-logo" />
                </div>

                <div className="navbar-links">
                    <button className="navbar-link" onClick={handleDashboard}>Dashboard</button>
                    <button className="navbar-link" onClick={handleBruiseAreaCalculation}>Bruised Area Calculation</button>
                    <button className="navbar-link" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="profile-link" onClick={handleResize}>Resize</button>
                    <button className="navbar-link" onClick={handleRemoveBackground}>Remove Background</button>
                    <button className="edit-link" onClick={handleAboutUs}>About Us</button>
                    <button className="edit-link" onClick={handleContactUs}>Contact Us</button>
                </div>

                <div className="navbar-profile" onClick={handleUserProfile}>
                    <img src={userProfileImg} alt="User Profile" className="user-profile" />
                </div>
            </nav>

            {/* View Photo Content */}
            <div className="show-area-calculation-content">
                <h2 className="show-area-calculation-title">View Photo</h2>

                {/* Main Content */}
                <main className="main-content">
                    <div className="photo-container">
                        <button className="nav-button prev-button" onClick={handlePrevious}>◀</button>
                        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="photo" />
                        <button className="nav-button next-button" onClick={handleNext}>▶</button>
                        <div className="photo-info">
                            <p>{images[currentIndex].info}</p>
                        </div>
                    </div>
                </main>

                {/* Action Buttons */}
                <div className="area-action-buttons">
                    <button className="btn back-to-btn" onClick={handleBack}>Back</button>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-viewphotoresutls">
                <div className="footer-address-viewphotoresults">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default ViewPhotoResults;
