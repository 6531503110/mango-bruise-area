import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExportCSVSuccessfully.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';
import checkImg from '../../assets/check.png'; // Import the check.png image

const ExportCSVSuccessfully = () => {
    const navigate = useNavigate();

    const handleAboutUs = useCallback(() => { navigate('/aboutus'); }, [navigate]);
    const handleContactUs = useCallback(() => { navigate('/contactus'); }, [navigate]);
    const handleDashboard = useCallback(() => { navigate('/dashboard'); }, [navigate]);
    const handleUserProfile = useCallback(() => { navigate('/userprofile'); }, [navigate]);
    const handleShowAreaCalculation = useCallback(() => { navigate('/showareacalculation'); }, [navigate]);
    const handleBruiseAreaCalculation = useCallback(() => { navigate('/bruiseareacalculation'); }, [navigate]);
    const handleFeatureAnalysis = useCallback(() => { navigate('/featureanalysis'); }, [navigate]);
    const handleResize = useCallback(() => { navigate('/resize'); }, [navigate]);
    const handleRemoveBackground = useCallback(() => { navigate('/removebackground'); }, [navigate]);
    const handlemainhome = useCallback(() => navigate('/mainhome'), [navigate]);

    return (
        <div className="export-csv-page">

            {/* Navbar */}
            <nav className="navbar-exportcsv">
                <div className="profile-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="manger-logo" onClick={handlemainhome}/>
                </div>

                <div className="navbar-links">
                    <button className="navbar-link" onClick={handleDashboard}>Dashboard</button>
                    <button className="navbar-link" onClick={handleBruiseAreaCalculation}>Bruised Area Calculation</button>
                    <button className="navbar-link" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="navbar-link" onClick={handleResize}>Resize</button>
                    <button className="navbar-link" onClick={handleRemoveBackground}>Remove Background</button>
                    <button className="navbar-link" onClick={handleAboutUs}>About Us</button>
                    <button className="navbar-link" onClick={handleContactUs}>Contact Us</button>
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