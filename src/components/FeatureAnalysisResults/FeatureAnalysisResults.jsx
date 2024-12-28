import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeatureAnalysisResults.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';

const FeatureAnalysisResults = () => {
    const navigate = useNavigate();

    const [checked, setChecked] = useState({
        glcm: true,
        rgb: true,
        hsv: true,
        perimeter: true,
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        const storedFiles = localStorage.getItem('uploadedFiles');
        if (storedFiles) {
            setData(JSON.parse(storedFiles));
        }
    }, []);

    const handleExportFeatureSuccessful = () => navigate('/exportfeaturesuccessful');
    const handleDashboard = () => { navigate('/dashboardpage') }
    const handleFeatureAnalysis = () => { navigate('/featureanalysis') }
    const handleBruiseAreaCalculation = () => { navigate('/bruiseareacalculation') }
    const handleAboutUs = () => navigate("/aboutuspage");
    const handleContactUs = () => navigate("/contactuspage");
    const handleUserProfile = () => navigate("/userprofilepage");

    const handleCheckboxChange = (feature) => {
        setChecked((prevChecked) => ({
            ...prevChecked,
            [feature]: !prevChecked[feature],
        }));
    };

    return (
        <div className="bruise-page">
            
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-brand">
                    <img src={mangoLogo} alt="Mango Logo" className="mango-logo" />
                </div>
                <div className="navbar-links">
                    <button className="navbar-link" onClick={handleDashboard}>Dashboard</button>
                    <button className="navbar-link" onClick={handleBruiseAreaCalculation}>Bruised Area Calculation</button>
                    <button className="navbar-link active" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="profile-link">Resize</button>
                    <button className="navbar-link" onClick={handleAboutUs}>About Us</button>
                    <button className="navbar-link" onClick={handleContactUs}>Contact Us</button>
                </div>
                <div className="navbar-profile" onClick={handleUserProfile}>
                    <img src={userProfileImg} alt="User Profile" className="user-profile" />
                </div>
            </nav>

            {/* Content */}
            <div className="bruise-content">
                <h1 className="bruis-title">Feature Analysis Results</h1>
                <div className="feature-selection">
                    <span>Selected Features :</span>
                    <label>
                        <input
                            type="checkbox"
                            checked={checked.glcm}
                            onChange={() => handleCheckboxChange('glcm')}
                        />
                        Gray-Level Co-occurrence Matrix (GLCM)
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={checked.rgb}
                            onChange={() => handleCheckboxChange('rgb')}
                        />
                        RGB
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={checked.hsv}
                            onChange={() => handleCheckboxChange('hsv')}
                        />
                        HSV
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={checked.perimeter}
                            onChange={() => handleCheckboxChange('perimeter')}
                        />
                        Perimeter
                    </label>
                </div>

                {/* Table */}
                <div className="results-table">
                    {data.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Image ID</th>
                                    <th>Red Mean</th>
                                    <th>Green Mean</th>
                                    <th>Blue Mean</th>
                                    <th>GLCM Contrast</th>
                                    <th>GLCM Energy</th>
                                    <th>GLCM Homogeneity</th>
                                    <th>Area</th>
                                    <th>Perimeter</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(row => (
                                    <tr key={row.id}>
                                        <td>{row.name}</td>
                                        <td>{row.red_mean || '-'}</td>
                                        <td>{row.green_mean || '-'}</td>
                                        <td>{row.blue_mean || '-'}</td>
                                        <td>{row.glcm_contrast ? row.glcm_contrast.toFixed(3) : '-'}</td>
                                        <td>{row.glcm_energy ? row.glcm_energy.toFixed(3) : '-'}</td>
                                        <td>{row.glcm_homogeneity ? row.glcm_homogeneity.toFixed(3) : '-'}</td>
                                        <td>{row.area || '-'}</td>
                                        <td>{row.perimeter || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No information available</p>
                    )}
                </div>

                {/* Actions */}
                <div className="action-buttons">
                    <button className="bt backkk-bt" onClick={handleFeatureAnalysis}>
                        Back
                    </button>
                    <button className="bt export-bt" onClick={handleExportFeatureSuccessful}>
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-featureanalysisresults">
                <div className="footer-address-featureanalysisresults">
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default FeatureAnalysisResults;
