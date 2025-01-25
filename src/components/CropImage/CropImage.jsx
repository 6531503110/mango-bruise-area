import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './CropImage.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';

const CropImage = () => {
    const [selectedFiles] = useState([]);
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [zoom, setZoom] = useState(1);

    const handleAboutUs = useCallback(() => navigate('/aboutuspage'), [navigate]);
    const handleContactUs = useCallback(() => navigate('/contactuspage'), [navigate]);
    const handleUserProfile = useCallback(() => navigate('/userprofilepage'), [navigate]);
    const handleDashboard = useCallback(() => navigate('/dashboardpage'), [navigate]);
    const handleFeatureAnalysis = useCallback(() => navigate('/featureanalysis'), [navigate]);
    const handleResize = useCallback(() => navigate('/resize'), [navigate]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = useCallback(() => {
        const fileData = selectedFiles.map((file, index) => ({
            id: index + 1,
            photoName: file.name,
            date: new Date().toLocaleString(),
            area: "---",
            percentage: "---"
        }));

        localStorage.setItem('uploadedFiles', JSON.stringify(fileData));
        navigate('/showareacalculation');
    }, [selectedFiles, navigate]);

    return (
        <div className="bruiseareacalculation-page">
            <nav className="navbar">
                <div className="navbar-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="mango-logo" />
                </div>
                <div className="navbar-links">
                    <button className="navbar-link" onClick={handleDashboard}>Dashboard</button>
                    <button className="navbar-link">Bruised Area Calculation</button>
                    <button className="navbar-link" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="navbar-link" onClick={handleResize}>Resize</button>
                    <button className="navbar-link" onClick={handleAboutUs}>About Us</button>
                    <button className="navbar-link" onClick={handleContactUs}>Contact Us</button>
                </div>
                <div className="navbar-profile" onClick={handleUserProfile}>
                    <img src={userProfileImg} alt="User Profile" className="user-profile" />
                </div>
            </nav>

            <div className="bruiseareacalculation-content">
                <h1 className="bruiseareacalculation-title">Crop Image</h1>
                <p className="bruise-description">
                    The online Crop image tool from mango bruise area detection transforms your images into the perfect size in seconds.
                </p>
                <div className="crop-image-container">
                    <div className="image-upload">
                        <label htmlFor="imageInput" className="upload-label">Upload Image</label>
                        <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            onChange={handleImageUpload}
                            hidden
                        />
                    </div>

                    {image && (
                        <div className="image-crop">
                            <div className="crop-box">
                                <img
                                    src={image}
                                    alt="Crop Preview"
                                    style={{ transform: `scale(${zoom})` }}
                                />
                            </div>
                            <div className="crop-controls">
                                <label>Zoom:</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="0.1"
                                    value={zoom}
                                    onChange={(e) => setZoom(e.target.value)}
                                />
                            </div>
                            <button className="save-crop">Save Crop</button>
                        </div>
                    )}
                </div>

                <div className="action-buttons">
                    <button className="bt backto-bt" onClick={handleDashboard}>
                        Reset
                    </button>
                    <button className="bt upload-bruiseareacalculation-bt" onClick={handleUpload}>
                        Saved
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
