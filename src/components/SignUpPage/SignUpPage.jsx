/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './SignUpPage.css';
import mangoLogo from '../../assets/Logo_black.png';

function SignUpPage() {
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
    });
    const [passwordAlert, setPasswordAlert] = useState(''); // Password alert state

    // Create refs for form inputs
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSignInClick = () => {
        navigate('/signin');
    };

    const handleSignUpClick = () => {
    const username = usernameRef.current ? usernameRef.current.value.trim() : '';
    const email = emailRef.current ? emailRef.current.value.trim() : '';
    const password = passwordRef.current ? passwordRef.current.value.trim() : '';
    const confirmPassword = confirmPasswordRef.current ? confirmPasswordRef.current.value.trim() : '';

        if (!username || !email || !password || !confirmPassword) {
            setAlertMessage('The field cannot be blank');
        } else if (password.length < 8) {
            setPasswordAlert('Password must be at least 8 characters');
        } else if (password !== confirmPassword) {
            setAlertMessage('Passwords do not match');
            setPasswordAlert('');
        } else {
            setAlertMessage('');
            setPasswordAlert('');

            // Save user credentials to local storage
            localStorage.setItem('signupUsername', username);
            localStorage.setItem('signupEmail', email);
            localStorage.setItem('signupPassword', password);

            navigate('/signin'); // Redirect to sign-in page
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSignUpClick();
        }
    };

    const togglePasswordVisibility = (field) => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <img src={mangoLogo} alt="Mango Logo" className="signup-logo" />
                <h1>Sign-Up</h1>

                {/* Display alert message if any error occurs */}
                {alertMessage && <div className="alert-message">{alertMessage}</div>}

                <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className="signup-input"
                    ref={usernameRef}
                    onKeyDown={handleKeyDown}
                />
                <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    className="signup-input"
                    ref={emailRef}
                    onKeyDown={handleKeyDown}
                />
                <div className="password-container">
                    <input
                        type={passwordVisibility.password ? 'text' : 'password'}
                        id="password"
                        placeholder="Create a password"
                        className="signup-input"
                        ref={passwordRef}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => togglePasswordVisibility('password')}
                    >
                        <FontAwesomeIcon icon={passwordVisibility.password ? faEyeSlash : faEye} />
                    </button>
                </div>
                <div className="password-container">
                    <input
                        type={passwordVisibility.confirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        placeholder="Confirm a password"
                        className="signup-input"
                        ref={confirmPasswordRef}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => togglePasswordVisibility('confirmPassword')}
                    >
                        <FontAwesomeIcon icon={passwordVisibility.confirmPassword ? faEyeSlash : faEye} />
                    </button>
                </div>

                {/* Move the password alert here, under the confirm password button */}
                {passwordAlert && <div className="password-alert">{passwordAlert}</div>}

                <button onClick={handleSignUpClick} className="signup-button">
                    Sign-up
                </button>
                <div className="signup-links">
                    <a onClick={handleSignInClick} className="signup-link">
                        Already have an account?
                    </a>
                    <a onClick={handleSignInClick} className="signup-link">
                        Sign-in
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
