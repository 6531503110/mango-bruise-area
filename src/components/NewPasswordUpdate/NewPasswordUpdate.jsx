import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPasswordUpdate.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';
import checkImg from '../../assets/check.png'; // Import the check.png image

const PasswordUpdatePage = () => {
    const navigate = useNavigate();

    const handleAboutUs = () => { navigate('/aboutuspage'); };
    const handleContactUs = () => { navigate('/contactuspage'); }
    const handleDashboard = () => { navigate('/dashboardpage') }
    const handleUserProfile = () => {navigate('/userprofilepage');};
    const handleSignIn = () => {navigate('/signin');};
    const handleBruiseAreaCalculation = () => { navigate('/bruiseareacalculation') }
    const handleFeatureAnalysis = () => { navigate('/featureanalysis') }

    return (
        <div className="password-update-page">

            {/* Navbar */}
            <nav className="profile">
                <div className="profile-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="manger-logo" />
                </div>

                <div className="profile-links">
                    <button className="profile-link" onClick={handleDashboard}>Dashboard</button>
                    <button className="profile-link" onClick={handleBruiseAreaCalculation}>Bruised Area Calculation</button>
                    <button className="profile-link" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="profile-link">Resize</button>
                    <button className="edit-link" onClick={handleAboutUs}>About Us</button>
                    <button className="edit-link" onClick={handleContactUs}>Contact Us</button>
                </div>

                <div className="navbar-profile">
                    <img src={userProfileImg} alt="User Profile" className="user-profile" onClick={handleUserProfile} />
                </div>
            </nav>

            {/* Password Update Content */}
            <div className="password-update-content">
                <div className="password-update-container">
                    <div className="password-update-form">
                        {/* Center the check image and text */}
                        <div className="check-container">
                            <img src={checkImg} alt="Check" className="check-img" />
                            <p>Your password has been updated</p>
                        </div>
                        <button className="save-password-button" onClick={handleSignIn}>Sign-in</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-newpasswordupdate">
                <div className="footer-address-newpasswordupdate">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default PasswordUpdatePage;
