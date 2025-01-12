import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resize.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';

const Resize = () => {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [resizedImages, setResizedImages] = useState([]);
    const [dimensions, setDimensions] = useState({ width: '', height: '' });
    const [keepAspectRatio, setKeepAspectRatio] = useState(false);

    const navigate = useNavigate();

    const handleAboutUs = () => navigate('/aboutuspage');
    const handleContactUs = () => navigate('/contactuspage');
    const handleUserProfile = () => navigate('/userprofilepage');
    const handleDashboard = () => navigate('/dashboardpage');
    const handleFeatureAnalysis = () => navigate('/featureanalysis');
    const handleBruiseAreaCalculation = () => { navigate('/bruiseareacalculation') }

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const validFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file.name));

        if (validFiles.length > 0) {
            setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
        } else {
            alert('Only .jpg, .jpeg, and .png files are allowed.');
        }
    };

    const handleResizeImages = () => {
        if (!dimensions.width || !dimensions.height) {
            alert('Please enter both width and height!');
            return;
        }

        const resized = selectedFiles.map(file => ({
            name: file.name,
            width: dimensions.width,
            height: dimensions.height,
        }));

        setResizedImages(resized);
    };

    const handleDownloadImage = (image) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(img, 0, 0, image.width, image.height);

            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = image.name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 'image/jpeg');
        };

        img.src = URL.createObjectURL(selectedFiles.find(file => file.name === image.name));
    };

    const handleReset = () => {
        setSelectedFiles([]);
        setResizedImages([]);
        setDimensions({ width: '', height: '' });
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
                <div className="navbar-profile" onClick={handleUserProfile}>
                    <img src={userProfileImg} alt="User Profile" className="user-profile" />
                </div>
            </nav>

            <div className="bruiseareacalculation-content">
                <h1 className="bruiseareacalculation-title">Resize Image</h1>
                <p className="bruise-description">
                    Resize JPG, PNG, SVG or GIF by defining new height and width pixels. Change image dimensions in bulk.
                </p>
                <div className="file-upload-container">
                    <div
                        className={`file-dropzone ${dragActive ? 'drag-active' : ''}`}
                        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                        onDragLeave={() => setDragActive(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            setDragActive(false);
                            handleFileChange(e);
                        }}
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
                        <p>🚨 Only .jpg .jpeg .png files are allowed</p>
                    </div>

                    <div className="resize-settings-bruiseareacalculation">
                        <h3>Resize Settings:</h3>
                        <div className="input-group">
                            <input
                                type="number"
                                className="resize-number-input"
                                placeholder="Width (px)"
                                value={dimensions.width}
                                onChange={(e) =>
                                    setDimensions({ ...dimensions, width: e.target.value })
                                }
                            />
                            <input
                                type="number"
                                className="resize-number-input"
                                placeholder="Height (px)"
                                value={dimensions.height}
                                onChange={(e) =>
                                    setDimensions({ ...dimensions, height: e.target.value })
                                }
                            />
                        </div>
                        <label className="aspect-ratio-label">
                            <input
                                type="checkbox"
                                checked={keepAspectRatio}
                                onChange={() => setKeepAspectRatio(!keepAspectRatio)}
                            />
                            Keep Aspect Ratio
                        </label>
                    </div>

                    <div className="selected-files-box">
                        <h3>Selected Files:</h3>
                        <ul>
                            {selectedFiles.map((file, index) => (
                                <li key={index}>
                                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="bt backto-bt" onClick={handleReset}>
                        Reset
                    </button>
                    <button className="bt upload-bruiseareacalculation-bt" onClick={handleResizeImages}>
                        Resize
                    </button>
                </div>

                {resizedImages.length > 0 && (
                    <div className="resized-images">
                        <h3>Resized Images:</h3>
                        <ul>
                            {resizedImages.map((image, index) => (
                                <li key={index} className="resized-image-item">
                                    <span>{image.name} - {image.width}px x {image.height}px</span>
                                    <button className="download-btn" onClick={() => handleDownloadImage(image)}>
                                        Download
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <footer className="footer-bruiseareacalculation">
                <div className="footer-address-bruiseareacalculation">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default Resize;
