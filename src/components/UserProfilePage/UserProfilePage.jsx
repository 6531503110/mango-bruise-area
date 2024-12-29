import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfilePage.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';
import { UserContext } from '../../UserContext';

const UserProfilePage = () => {
    const navigate = useNavigate();
    const { userInfo } = useContext(UserContext);

    const handleAboutUs = () => {navigate('/aboutuspage');};
    const handleContactUs = () => {navigate('/contactuspage');}
    const handleDashboard = () => {navigate('/dashboardpage')}
    const handleEditUser = () => {navigate('/edituserprofile')}
    const handleChangeProfilePassword = () => {navigate('/changeprofilepassword')}
    const handleUserProfile = () => {navigate('/userprofilepage');};
    const handleBruiseAreaCalculation = () => { navigate('/bruiseareacalculation') }
    const handleFeatureAnalysis = () => { navigate('/featureanalysis') }

    return (
        <div className="profile-page">

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
                    <button className="profile-link" onClick={handleAboutUs}>About Us</button>
                    <button className="profile-link" onClick={handleContactUs}>Contact Us</button>
                </div>

                <div className="navbar-profile">
                    <img src={userProfileImg} alt="User Profile" className="user-profile" onClick={handleUserProfile} />
                </div>
            </nav>

            {/* User Profile Content */}
            <div className="user-profile-content">
                <h2 className="profile-title">User Profile</h2>
                <div className="profile-container">
                    <img src={userProfileImg} alt="Profile" className="profile-userimage" />
                    <div className="profile-info">
                        <p><strong>Name:</strong> {userInfo.name}</p>
                        <p><strong>Email:</strong> {userInfo.email}</p>
                        <p><strong>Phone Number:</strong> {userInfo.phone}</p>
                        <p><strong>Country:</strong> {userInfo.country}</p>
                        <div className="profile-buttons">
                            <button className="editer-button" onClick={handleEditUser}>Edit</button>
                            <button className="change-userprofilepage-button" onClick={handleChangeProfilePassword}>Change Password</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-userprofilepage">
                <div className="footer-address">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default UserProfilePage;
