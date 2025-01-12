import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';
import mangoLogo from '../../assets/Logo_white.png';
import userProfileImg from '../../assets/profile.jpg';

const DashboardPage = () => {

    const navigate = useNavigate(); // useNavigate hook to handle page navigation

    // Event handlers to navigate to different pages
    const handleAboutUs = () => {navigate('/aboutuspage');};
    const handleContactUs = () => {navigate('/contactuspage');}
    const handleUserProfile = () => {navigate('/userprofilepage');};
    const handleBruiseAreaCalculation = () => { navigate('/bruiseareacalculation') }
    const handleFeatureAnalysis = () => { navigate('/featureanalysis') }
    const handleShowAreaCalculation = () => navigate('/showareacalculation')
    const handleExportCSV = () => { navigate('/exportcsvsuccessfully') }
    const handleResize = () => {navigate('/resize')}

    return (
        <div className="dashboard-page">
            
            {/* Navbar */}
            <nav className="navbar-dashboard">
                <div className="navbar-brand">

                    {/* Mango logo in the navbar */}
                    <img src={mangoLogo} alt="Mango Logo" className="manger-logo" />
                </div>

                <div className="navbar-links">

                    {/* Dashboard and other navigation links */}
                    <button className="navbar-link">Dashboard</button>
                    <button className="navbar-link" onClick={handleBruiseAreaCalculation}>Bruised Area Calculation</button>
                    <button className="navbar-link" onClick={handleFeatureAnalysis}>Feature Analysis</button>
                    <button className="navbar-link" onClick={handleResize}>Resize</button>
                    <button className="navbar-link" onClick={handleAboutUs}>About Us</button>
                    <button className="navbar-link" onClick={handleContactUs}>Contact Us</button>
                </div>

                {/* User profile section */}
                <div className="navbar-profile" onClick={handleUserProfile}>
                    <img src={userProfileImg} alt="User Profile" className="user-profile" />
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="dashboard-content">
                <h2 className="dashboard-title">Dashboard</h2>
                <div className="dashboard-table-container">

                    {/* Table to display operation results */}
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Operation Type</th>
                                <th>Date / Time</th>
                                <th>Results</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody className="dashboard-table-body">

                            {/* Table rows for different operations */}
                            <tr>
                                <td>Bruised Area Calculation</td>
                                <td>10/23/2024 (03:35 P.M.)</td>
                                <td><button className="btn view-btn" onClick={handleShowAreaCalculation}>View Result</button></td>
                                <td><button className="btn export-btn" onClick={handleExportCSV}>Export CSV</button></td>
                            </tr>
                            <tr>
                                <td>Bruised Area Calculation</td>
                                <td>10/23/2024 (02:47 P.M.)</td>
                                <td><button className="btn view-btn" onClick={handleShowAreaCalculation}>View Result</button></td>
                                <td><button className="btn export-btn" onClick={handleExportCSV}>Export CSV</button></td>
                            </tr>
                            <tr>
                                <td>Mfeats</td>
                                <td>10/23/2024 (01:23 P.M.)</td>
                                <td><button className="btn view-btn" onClick={handleShowAreaCalculation}>View Result</button></td>
                                <td><button className="btn export-btn" onClick={handleExportCSV}>Export CSV</button></td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td>10/23/2024 (01:23 P.M.)</td>
                                <td><button className="btn view-btn" onClick={handleShowAreaCalculation}>View Result</button></td>
                                <td><button className="btn export-btn" onClick={handleExportCSV}>Export CSV</button></td>
                            </tr>
                            <tr>
                                <td>Pythorch</td>
                                <td>10/23/2024 (01:23 P.M.)</td>
                                <td><button className="btn view-btn" onClick={handleShowAreaCalculation}>View Result</button></td>
                                <td><button className="btn export-btn" onClick={handleExportCSV}>Export CSV</button></td>
                            </tr>
                            <tr>
                                <td>Tensorflow</td>
                                <td>10/23/2024 (01:23 P.M.)</td>
                                <td><button className="btn view-btn" onClick={handleShowAreaCalculation}>View Result</button></td>
                                <td><button className="btn export-btn" onClick={handleExportCSV}>Export CSV</button></td>
                            </tr>
                            <tr>
                                <td>User Profile</td>
                                <td>10/23/2024 (01:23 P.M.)</td>
                                <td><button className="btn view-btn" onClick={handleShowAreaCalculation}>View Result</button></td>
                                <td><button className="btn export-btn" onClick={handleExportCSV}>Export CSV</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footering">
                <div className="footering-links">
                    
                    {/* Empty section for future links */}
                </div>
                
                <div className="footering-address">

                    {/* Footer address */}
                    <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
                </div>
            </footer>
        </div>
    );
};

export default DashboardPage;
