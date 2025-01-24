import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Cropper from 'react-easy-crop'; // Ensure this is installed
import './CropImage.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';

const CropImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const navigate = useNavigate();

    const handleAboutUs = useCallback(() => navigate('/aboutuspage'), [navigate]);
    const handleDashboard = useCallback(() => navigate('/dashboardpage'), [navigate]);
    const handleBruiseAreaCalculation = useCallback(() => navigate('/bruiseareacalculation'), [navigate]);
    const handleFeatureAnalysis = useCallback(() => navigate('/featureanalysis'), [navigate]);
    const handleContactUs = useCallback(() => navigate('/contactuspage'), [navigate]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && /\.(jpg|jpeg|png)$/i.test(file.name)) {
            const reader = new FileReader();
            reader.onload = () => setSelectedImage(reader.result);
            reader.readAsDataURL(file);
        } else {
            alert('Only .jpg, .jpeg, and .png files are allowed.');
        }
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels);
    }, []);

    const handleUpload = () => {
        alert('Image cropped and ready for upload!');
    };

    return (
        <div className="bruiseareacalculation-page">
            <nav className="navbar">
                <div className="navbar-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="mango-logo" />
                </div>
                <div className="navbar-links">
                    <button className="navbar-link" onClick={handleDashboard}>Dashboard</button>
                    <button className="navbar-link" onClick={handleBruiseAreaCalculation}>Bruised Area Calculation</button>
                    <button className="navbar-link" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="navbar-link">Resize</button>
                    <button className="navbar-link" onClick={handleAboutUs}>About Us</button>
                    
                    <button className="navbar-link" onClick={handleContactUs}>Contact Us</button>
                </div>
                <div className="navbar-profile">
                    <img src={userProfileImg} alt="User Profile" className="user-profile" />
                </div>
            </nav>

            <div className="bruiseareacalculation-content">
                <h1 className="bruiseareacalculation-title">Crop Image</h1>
                <p className="bruise-description">
                    The Crop image tool transforms your images into the perfect size in seconds.
                </p>
                <div className="file-crop-image">
                    {!selectedImage ? (
                        <div className="file-dropzone">
                            <input
                                type="file"
                                className="file-input"
                                id="file-upload"
                                onChange={handleFileChange}
                                accept=".jpg,.jpeg,.png"
                            />
                            <label htmlFor="file-upload" className="browse-bruiseareacalculation-btn">
                                Upload Image
                            </label>
                        </div>
                    ) : (
                        <div className="crop-container">
                            <Cropper
                                image={selectedImage}
                                crop={crop}
                                zoom={zoom}
                                aspect={4 / 3}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                            />
                            <div className="crop-controls">
                                <input
                                    type="range"
                                    value={zoom}
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    onChange={(e) => setZoom(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="action-buttons">
                    <button className="bt backto-bt" onClick={handleDashboard}>
                        Cancel
                    </button>
                    <button className="bt upload-bruiseareacalculation-bt" onClick={handleUpload}>
                        Update
                    </button>
                </div>
            </div>

            <footer className="footer-bruiseareacalculation">
                <div className="footer-address-bruiseareacalculation">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default CropImage;
