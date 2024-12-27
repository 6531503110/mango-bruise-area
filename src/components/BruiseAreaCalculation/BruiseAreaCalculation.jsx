import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BruiseAreaCalculation.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';

const BruiseAreaCalculation = () => {

    // State to manage drag and drop file upload activity
    const [dragActive, setDragActive] = useState(false);
    
    // State to store the selected files
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate();  // Hook for navigation

    // Functions for navigating to different pages
    const handleAboutUs = () => navigate('/aboutuspage');
    const handleContactUs = () => navigate('/contactuspage');
    const handleUserProfile = () => navigate('/userprofilepage');
    const handleDashboard = () => navigate('/dashboardpage');
    const handleShowAreaCalculation = () => navigate('/showareacalculation');
    const handleFeatureAnalysis = () => { navigate('/featureanalysis') };

    // Function to handle file selection
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const validFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file.name));
        if (validFiles.length > 0) {
            setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
        } else {
            alert('Only .jpg, .jpeg, and .png files are allowed.');
        }
    };

    // Function to handle drag over event
    const handleDragOver = (event) => {
        event.preventDefault();
        setDragActive(true);
    };

    // Function to handle drag leave event
    const handleDragLeave = () => {
        setDragActive(false);
    };

    // Function to handle file drop event
    const handleDrop = (event) => {
        event.preventDefault();
        setDragActive(false);
        const files = Array.from(event.dataTransfer.files);
        const validFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file.name));
        if (validFiles.length > 0) {
            setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
        } else {
            alert('Only .jpg, .jpeg, and .png files are allowed.');
        }
    };

    // Function to delete a selected file
    const handleFileDelete = (index) => {
        setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="bruiseareacalculation-page">

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="mango-logo" />
                </div>
                <div className="navbar-links">
                    <button className="navbar-link" onClick={handleDashboard}>Dashboard</button>
                    <button className="navbar-link">Bruised Area Calculation</button>
                    <button className="navbar-link" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="navbar-link">Resize</button>
                    <button className="navbar-link" onClick={handleAboutUs}>About Us</button>
                    <button className="navbar-link" onClick={handleContactUs}>Contact Us</button>
                </div>
                <div className="navbar-profile" onClick={handleUserProfile}>
                    <img src={userProfileImg} alt="User Profile" className="user-profile" />
                </div>
            </nav>

            {/* Content */}
            <div className="bruiseareacalculation-content">
                <h1 className="bruiseareacalculation-title">Bruise Area Calculation</h1>
                <p className="bruise-description">
                    The Bruise area calculation will show the total area of mango and the total bruise area of mango
                </p>
                <div className="file-upload-container">
                    
                    {/* File dropzone */}
                    <div
                        className={`file-dropzone ${dragActive ? 'drag-active' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <p>Drag & Drop your images here or</p>
                        <input
                            type="file"
                            className="file-input"
                            id="file-upload"
                            onChange={handleFileChange}
                            accept=".jpg,.jpeg,.png"
                            multiple
                        />
                        <label htmlFor="file-upload" className="browse-bruiseareacalculation-btn">
                            Browse 📁
                        </label>
                        <p>🚨Only .jpg .jpeg .png files are allowed</p>
                    </div>

                    {/* Show the selected files box */}
                    <div className="selected-files-box">
                        <h3>Selected Files:</h3>
                        <ul>
                            {selectedFiles.map((file, index) => (
                                <li key={index} className="file-item">
                                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleFileDelete(index)}
                                    >
                                        ❌
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="action-buttons">
                    <button className="bt backto-bt" onClick={handleDashboard}>
                        Back
                    </button>
                    <button className="bt upload-bruiseareacalculation-bt" onClick={handleShowAreaCalculation}>
                        Upload
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-bruiseareacalculation">
                <div className="footer-address-bruiseareacalculation">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default BruiseAreaCalculation;
