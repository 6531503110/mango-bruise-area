/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './SignIn.css';
import mangoLogo from '../../assets/Logo_black.png';

function SignIn() {
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    // Pre-set credentials
    const presetUsername = 'John Mayer';
    const presetPassword = '12345678';

    const handleForgotPassword = () => { navigate('/forgotpassword'); };
    const handleSignUpClick = () => { navigate('/signup'); };

    const handleSignInClick = () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Check if the credentials match pre-set credentials
        if (username === presetUsername && password === presetPassword) {
            setAlertMessage('');
            console.log('Remember Me:', rememberMe);
            navigate('/mainhomepage'); // Redirect to main page after successful sign-in
            return;
        }

        const storedUsername = localStorage.getItem('signupUsername');
        const storedEmail = localStorage.getItem('signupEmail');
        const storedPassword = localStorage.getItem('signupPassword');

        if (!username || !password) {
            setAlertMessage('The field cannot be blank');
        } else if (password.length < 8) {
            setPasswordAlert('Password must be at least 8 characters');
        } else if ((username !== storedUsername && username !== storedEmail) || password !== storedPassword) {
            setAlertMessage('Username/email or password is incorrect');
        } else {
            setAlertMessage('');
            console.log('Remember Me:', rememberMe);
            navigate('/mainhomepage'); // Redirect to main page after successful sign-in
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSignInClick();
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <img src={mangoLogo} alt="Mango Logo" className="signin-logo" />
                <h1>Sign-In</h1>

                <input
                    type="text"
                    id="username"
                    placeholder="Enter your username or email" 
                    className="signin-input"
                    onKeyDown={handleKeyDown}
                />

                <div className="password-wrapper">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="Confirm a password"
                        className="signin-input password-input"
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>

                {alertMessage && <div className="alert-message">{alertMessage}</div>}
                {passwordAlert && <div className="password-alert">{passwordAlert}</div>}

                <div className="remember-me">
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Remember Me
                    </label>
                </div>

                <button className="signin-button" onClick={handleSignInClick}>
                    Sign-in
                </button>
                <div className="signin-links">
                    <a onClick={handleForgotPassword} className="forgot-password">
                        Forgot Password?
                    </a>
                    <a onClick={handleSignUpClick} className="signup-link">
                        Sign-up
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
