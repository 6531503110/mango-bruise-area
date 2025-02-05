import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfilePage.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';
import { UserContext } from '../../UserContext';

const UserProfilePage = () => {
    const navigate = useNavigate();
    const handleResize = () => {navigate('/resize')}
    const { userInfo } = useContext(UserContext);
    const handleRemoveBackground = () => {navigate('/removebackground')}

    return (
        <div className="profile-page">
            <nav className="profile">
                <div className="profile-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="manger-logo" />
                </div>
                <div className="navbar-links">
                    <button className="profile-link" onClick={() => navigate('/dashboardpage')}>Dashboard</button>
                    <button className="profile-link" onClick={() => navigate('/bruiseareacalculation')}>Bruised Area Calculation</button>
                    <button className="profile-link" onClick={() => navigate('/featureanalysis')}>Feature Analysis</button>
                    <button className="profile-link" onClick={handleResize}>Resize</button>
                    <button className="navbar-link" onClick={handleRemoveBackground}>Remove Background</button>
                    <button className="profile-link" onClick={() => navigate('/aboutuspage')}>About Us</button>
                    <button className="profile-link" onClick={() => navigate('/contactuspage')}>Contact Us</button>
                </div>
                <div className="navbar-profile">
                    <img src={userInfo.profileImage || userProfileImg} alt="User Profile" className="user-profile" onClick={() => navigate('/userprofilepage')} />
                </div>
            </nav>

            <div className="user-profile-content">
                <h2 className="profile-title">User Profile</h2>
                <div className="profile-container">
                    <img src={userInfo.profileImage || userProfileImg} alt="Profile" className="profile-userimage" />
                    <div className="profile-info">
                        <p><strong>Name:</strong> {userInfo.name}</p>
                        <p><strong>Email:</strong> {userInfo.email}</p>
                        <p><strong>Phone Number:</strong> {userInfo.phone}</p>
                        <p><strong>Country:</strong> {userInfo.country}</p>
                        <div className="profile-buttons">
                            <button className="editer-button" onClick={() => navigate('/edituserprofile')}>Edit</button>
                            <button className="change-userprofilepage-button" onClick={() => navigate('/changeprofilepassword')}>Change Password</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer-userprofilepage">
                <div className="footer-address">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default UserProfilePage;
