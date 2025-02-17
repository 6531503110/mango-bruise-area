import React, { useState, useCallback } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './ChangeProfilePassword.css'; 
import mangoLogo from '../../assets/Logo_white.png'; 
import userProfileImg from '../../assets/profile.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

const ChangeProfilePassword = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [passwordLengthAlert, setPasswordLengthAlert] = useState(''); // New state for password length alert
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleResize = useCallback(() => {
    navigate('/resize');
  }, [navigate]);

  const handleRemoveBackground = useCallback(() => {
    navigate('/removebackground');
  }, [navigate]);

  const handleNewPasswordUpdate = useCallback(() => {
    if (!newPassword || !confirmPassword) {
      setAlertMessage('The field cannot be blank');
    } else if (newPassword.length < 8) {
      setPasswordLengthAlert('Password must be at least 8 characters'); // Check password length
    } else if (newPassword !== confirmPassword) {
      setAlertMessage('Passwords do not match');
      setPasswordLengthAlert(''); // Clear password length alert
    } else {
      setAlertMessage('');
      setPasswordLengthAlert(''); // Clear all alerts
      localStorage.setItem('signupPassword', newPassword); // Store the new password in local storage
      navigate('/newpasswordupdate'); // Navigate to the password update confirmation page
    }
  }, [newPassword, confirmPassword, navigate]);

  const toggleVisibility = useCallback((field) => {
    if (field === 'newPassword') {
      setShowNewPassword((prev) => !prev);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword((prev) => !prev);
    }
  }, []);

  const handlemainhome = useCallback(() => navigate('/mainhome'), [navigate]);

  return (
    <div className="change-profilepassword-page">
      <nav className="profile">
        <div className="profile-brand">
          <img src={mangoLogo} alt="Mango Logo" className="manger-logo" onClick={handlemainhome}/>
        </div>

        <div className="navbar-links">
          <button className="profile-link" onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className="profile-link" onClick={() => navigate('/bruiseareacalculation')}>Bruised Area Calculation</button>
          <button className="profile-link" onClick={() => navigate('/featureanalysis')}>Feature Analysis</button>
          <button className="navbar-link" onClick={handleResize}>Resize</button>
          <button className="navbar-link" onClick={handleRemoveBackground}>Remove Background</button>
          <button className="edit-link" onClick={() => navigate('/aboutus')}>About Us</button>
          <button className="edit-link" onClick={() => navigate('/contactus')}>Contact Us</button>
        </div>

        <div className="navbar-profile">
          <img src={userProfileImg} alt="User Profile" className="user-profile" onClick={() => navigate('/userprofile')} />
        </div>
      </nav>

      <div className="change-password-content">
        <h2 className="change-password-title">New Password</h2>
        <div className="change-password-container">
          {alertMessage && <div className="alert-message">{alertMessage}</div>}
          {passwordLengthAlert && <div className="alert-message">{passwordLengthAlert}</div>} {/* Display password length alert */}

          <div className="profilepassword-wrapper">
            <input
              type={showNewPassword ? 'text' : 'password'}
              placeholder="Enter new password"
              className="ChangePassword-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-visibility"
              onClick={() => toggleVisibility('newPassword')}
            >
              <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm new password"
              className="ChangePassword-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-visibility"
              onClick={() => toggleVisibility('confirmPassword')}
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <button className="save-profilepassword-button" onClick={handleNewPasswordUpdate}>
            Save Password
          </button>
          <button className="ban-button" onClick={() => navigate('/userprofile')}>Cancel</button>
        </div>
      </div>

      <footer className="footer-changeprofilepassword">
        <div className="footer-address">
          <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
        </div>
      </footer>
    </div>
  );
};

export default ChangeProfilePassword;
