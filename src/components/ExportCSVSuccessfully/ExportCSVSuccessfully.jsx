import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExportCSVSuccessfully.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';
import checkImg from '../../assets/check.png'; // Import the check.png image

const ExportCSVSuccessfully = () => {
    const navigate = useNavigate();

    const handleAboutUs = () => { navigate('/aboutuspage'); };
    const handleContactUs = () => { navigate('/contactuspage'); }
    const handleDashboard = () => { navigate('/dashboardpage') }
    const handleUserProfile = () => { navigate('/userprofilepage'); };
    const handleShowAreaCalculation = () => { navigate('/showareacalculation')}
    const handleBruiseAreaCalculation = () => { navigate('/bruiseareacalculation') }
    const handleFeatureAnalysis = () => { navigate('/featureanalysis') }

    return (
        <div className="export-csv-page">

            {/* Navbar */}
            <nav className="navbar-exportcsv">
                <div className="profile-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="manger-logo" />
                </div>

                <div className="profile-links">
                    <button className="profile-link" onClick={handleDashboard}>Dashboard</button>
                    <button className="profile-link" onClick={handleBruiseAreaCalculation}>Bruised Area Calculation</button>
                    <button className="profile-link" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="profile-link">Resize</button>
                    <button className="profile-link" onClick={handleAboutUs}>About Us</button>
                    <button className="profile-link" onClick={handleContactUs}>Contact Us</button>
                </div>

                <div className="navbar-profile">
                    <img src={userProfileImg} alt="User Profile" className="user-profile" onClick={handleUserProfile} />
                </div>
            </nav>

            {/* Password Update Content */}
            <div className="export-csv-content">
                <div className="export-csv-container">
                    <div className="export-csv-form">

                        {/* Center the check image and text */}
                        <div className="check-container">
                            <img src={checkImg} alt="Check" className="check-img" />
                            <p>Your CSV has been exported successfully</p>
                        </div>
                        <button className="export-password" onClick={handleShowAreaCalculation}>Done</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-exportcsv">
                <div className="footer-exportcsv-address">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default ExportCSVSuccessfully;
