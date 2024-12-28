import React, { useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditUserProfile.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';
import { UserContext } from '../../UserContext';

const EditUserProfile = () => {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [profileImage, setProfileImage] = useState(userProfileImg);
    const [errorMessage, setErrorMessage] = useState('');

    // Handlers for navigation
    const handleNavigation = useCallback((path) => () => navigate(path), [navigate]);

    // Handlers for input changes
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
    }, [setUserInfo]);

    // Handler for profile image upload
    const handleImageUpload = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setProfileImage(imageURL);
        }
    }, []);

    // Save button handler with validation
    const handleSave = useCallback(() => {
        const requiredFields = ['name', 'email', 'phone', 'country'];
        const missingFields = requiredFields.filter(field => !userInfo[field]);

        if (missingFields.length > 0) {
            setErrorMessage(`The following fields cannot be blank: ${missingFields.join(', ')}`);
            return;
        }

        setErrorMessage(''); // Clear the error if all fields are valid
        navigate(-1); // Go back to the previous page
    }, [userInfo, navigate]);

    return (
        <div className="edit-page">
            
            {/* Navbar */}
            <nav className="edit">
                <div className="edit-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="manger-logo" />
                </div>
                <div className="edit-links">
                    <button className="edit-link" onClick={handleNavigation('/dashboardpage')}>Dashboard</button>
                    <button className="edit-link" onClick={handleNavigation('/bruiseareacalculation')}>Bruised Area Calculation</button>
                    <button className="edit-link" onClick={handleNavigation('/featureanalysis')}>Feature Analysis</button>
                    <button className="profile-link">Resize</button>
                    <button className="edit-link" onClick={handleNavigation('/aboutuspage')}>About Us</button>
                    <button className="edit-link" onClick={handleNavigation('/contactuspage')}>Contact Us</button>
                </div>
                <div className="edit-profile">
                    <img src={userProfileImg} alt="User Profile" className="user-profile" onClick={handleNavigation('/userprofilepage')} />
                </div>
            </nav>

            {/* User Profile Content */}
            <div className="edit-profile-content">
                <h2 className="edit-title">Edit User Information</h2>
                <div className="edit-container">
                    <div className="profile-section">
                        <img src={profileImage} alt="Profile" className="profile-image" />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="image-upload"
                        />
                    </div>
                    <div className="edit-info">
                        <div className="edit-info-row">
                            <label>
                                <strong>Name:</strong>
                                <input
                                    type="text"
                                    name="name"
                                    value={userInfo.name}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                />
                            </label>
                            <label>
                                <strong>Email:</strong>
                                <input
                                    type="email"
                                    name="email"
                                    value={userInfo.email}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                />
                            </label>
                        </div>
                        <div className="edit-info-row">
                            <label>
                                <strong>Phone Number:</strong>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={userInfo.phone}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                />
                            </label>
                            <label>
                                <strong>Country:</strong>
                                <input
                                    type="text"
                                    name="country"
                                    value={userInfo.country}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                />
                            </label>
                        </div>

                        {/* Error Message */}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                        <div className="edit-buttons">
                            <button className="edit-button" onClick={handleNavigation(-1)}>Back</button>
                            <button className="change-password-button" onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-edituserprofile">
                <div className="footer-address-edituserprofile">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default EditUserProfile;
