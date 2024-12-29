import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ShowAreaCalculation.css";
import mangoLogo from "../../assets/Logo_white.png";
import userProfileImg from "../../assets/profile.jpg";

const ShowAreaCalculation = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedFiles = localStorage.getItem('uploadedFiles');
    
    if (storedFiles) {
      setTableData(JSON.parse(storedFiles));
    }
  }, []);

  const handleDelete = (id) => {
    const updatedData = tableData.filter((row) => row.id !== id);
    setTableData(updatedData);
    localStorage.setItem('uploadedFiles', JSON.stringify(updatedData));
  };

  const handleAboutUs = () => navigate("/aboutuspage");
  const handleContactUs = () => navigate("/contactuspage");
  const handleUserProfile = () => navigate("/userprofilepage");
  const handleBack = () => navigate("/bruiseareacalculation");

  const handleExportCSV = () => {
    if (tableData.length === 0) {
      alert("No information to export");
    } else {
      navigate("/exportcsvsuccessfully");
    }
  };

  const handleDashboard = () => navigate("/dashboardpage");
  const handleBruiseAreaCalculation = () => navigate("/bruiseareacalculation");
  const handleFeatureAnalysis = () => navigate("/featureanalysis");
  const handleViewPhotoResults = () => navigate("/viewphotoresults");

  return (
    <div className="show-area-calculation-page">
      <nav className="navbar-showareacalculation">
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

      <div className="show-area-calculation-content">
        <h2 className="show-area-calculation-title">Bruise Area Calculation Results</h2>
        <div className="show-area-calculation-table-container">
          {tableData.length > 0 ? (
            <table className="show-area-calculation-table">
              <thead>
                <tr>
                  <th>Photo Name</th>
                  <th>Whole Fruit Area</th>
                  <th>Bruise Area</th>
                  <th>Bruise Area Percentage</th>
                  <th>Results</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.photoName}</td>
                    <td>{row.date}</td>
                    <td>{row.area}</td>
                    <td>{row.percentage}</td>
                    <td>
                      <button className="btn view-result-btn" onClick={handleViewPhotoResults}>View Photo</button>
                    </td>
                    <td>
                      <button className="btn export-result-btn" onClick={() => handleDelete(row.id)}>Delete Photo</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No information available</p>
          )}
        </div>

        <div className="area-action-buttons">
          <button className="btn backer-btn" onClick={handleBack}>Back</button>
          <button className="btn upload-btn" onClick={handleExportCSV}>Export CSV</button>
        </div>
      </div>

      <footer className="footer-showareacalculation">
        <div className="footer-showareacalculation-address">
          <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
        </div>
      </footer>
    </div>
  );
};

export default ShowAreaCalculation;
