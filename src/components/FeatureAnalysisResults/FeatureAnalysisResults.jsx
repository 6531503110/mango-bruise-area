import React, { useState } from 'react';
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

    const handleExportFeatureSuccessful = () => navigate('/exportfeaturesuccessful');
    const handleDashboard = () => { navigate('/dashboardpage') }
    const handleFeatureAnalysis = () => { navigate('/featureanalysis') }
    const handleBruiseAreaCalculation = () => { navigate('/bruiseareacalculation') }
    const handleAboutUs = () => navigate("/aboutuspage");
    const handleContactUs = () => navigate("/contactuspage");
    const handleUserProfile = () => navigate("/userprofilepage");

    // Dummy data for the table
    const data = [
        { id: 1, red_mean: 123.5, green_mean: 110.3, blue_mean: 95.6, glcm_contrast: 0.345, glcm_energy: 0.870, glcm_homogeneity: 0.750, area: 1500, perimeter: 120 },
        { id: 2, red_mean: 132.8, green_mean: 125.0, blue_mean: 101.4, glcm_contrast: 0.280, glcm_energy: 0.885, glcm_homogeneity: 0.812, area: 1625, perimeter: 140 },
        { id: 3, red_mean: 146.9, green_mean: 133.5, blue_mean: 119.2, glcm_contrast: 0.410, glcm_energy: 0.850, glcm_homogeneity: 0.765, area: 1710, perimeter: 160 },
        { id: 4, red_mean: 146.9, green_mean: 133.5, blue_mean: 119.2, glcm_contrast: 0.410, glcm_energy: 0.850, glcm_homogeneity: 0.765, area: 1710, perimeter: 160 },
        { id: 5, red_mean: 146.9, green_mean: 133.5, blue_mean: 119.2, glcm_contrast: 0.410, glcm_energy: 0.850, glcm_homogeneity: 0.765, area: 1710, perimeter: 160 },
        { id: 6, red_mean: 146.9, green_mean: 133.5, blue_mean: 119.2, glcm_contrast: 0.410, glcm_energy: 0.850, glcm_homogeneity: 0.765, area: 1710, perimeter: 160 },
        { id: 7, red_mean: 146.9, green_mean: 133.5, blue_mean: 119.2, glcm_contrast: 0.410, glcm_energy: 0.850, glcm_homogeneity: 0.765, area: 1710, perimeter: 160 },
        // Add more rows as needed
    ];

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
                                    <td>{row.id}</td>
                                    <td>{row.red_mean}</td>
                                    <td>{row.green_mean}</td>
                                    <td>{row.blue_mean}</td>
                                    <td>{row.glcm_contrast.toFixed(3)}</td>
                                    <td>{row.glcm_energy.toFixed(3)}</td>
                                    <td>{row.glcm_homogeneity.toFixed(3)}</td>
                                    <td>{row.area}</td>
                                    <td>{row.perimeter}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
