import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShowAreaCalculation.css";
import mangoLogo from "../../assets/Logo_white.png";
import userProfileImg from "../../assets/profile.jpg";

const ShowAreaCalculation = () => {
  const navigate = useNavigate();

  // Initial data for the table
  const initialData = [
    { id: 1, photoName: "Bruised Area Calculation", date: "10/23/2024 (03:35 P.M.)", area: "50.2 cm²", percentage: "25%" },
    { id: 2, photoName: "Bruised Area", date: "10/23/2024 (02:47 P.M.)", area: "40.0 cm²", percentage: "20%" },
    { id: 3, photoName: "Mfeats", date: "10/23/2024 (01:23 P.M.)", area: "---", percentage: "80%" },
    { id: 4, photoName: "Pang", date: "10/23/2024 (02:47 P.M.)", area: "40.0 cm²", percentage: "60%" },
    { id: 5, photoName: "Pathomphong", date: "10/23/2024 (01:23 P.M.)", area: "---", percentage: "34%" },
    { id: 6, photoName: "Chaichuay", date: "10/23/2024 (02:47 P.M.)", area: "40.0 cm²", percentage: "24%" },
    { id: 7, photoName: "Software", date: "10/23/2024 (01:23 P.M.)", area: "---", percentage: "23%" },
    { id: 8, photoName: "Engineering", date: "10/23/2024 (02:47 P.M.)", area: "40.0 cm²", percentage: "21%" },
    { id: 9, photoName: "University", date: "10/23/2024 (01:23 P.M.)", area: "---", percentage: "99%" },
    // Add more rows as needed
  ];

  const [tableData, setTableData] = useState(initialData);

  // Delete row handler
  const handleDelete = (id) => {
    setTableData((prevData) => prevData.filter((row) => row.id !== id));
  };


  // Navigation Handlers
  const handleAboutUs = () => navigate("/aboutuspage");
  const handleContactUs = () => navigate("/contactuspage");
  const handleUserProfile = () => navigate("/userprofilepage");
  const handleBack = () => navigate("/bruiseareacalculation");
  const handleExportCSV = () => navigate("/exportcsvsuccessfully");
  const handleDashboard = () => navigate("/dashboardpage");
  const handleBruiseAreaCalculation = () => navigate("/bruiseareacalculation");
  const handleFeatureAnalysis = () => navigate("/featureanalysis");
  const handleViewPhotoResults = () => navigate("/viewphotoresults");

  return (
    <div className="show-area-calculation-page">

      {/* Navbar */}
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

      {/* Show Area Calculation Content */}
      <div className="show-area-calculation-content">
        <h2 className="show-area-calculation-title">Bruise Area Calculation Results</h2>
        <div className="show-area-calculation-table-container">
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
        </div>

        {/* Action Buttons */}
        <div className="area-action-buttons">
          <button className="btn backer-btn" onClick={handleBack}>Back</button>
          <button className="btn upload-btn" onClick={handleExportCSV}>Export CSV</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-showareacalculation">
        <div className="footer-showareacalculation-address">
          <p>Mae Fah Luang University 333 Moo 1, Thasud, Muang, Chiang Rai 57100</p>
        </div>
      </footer>
    </div>
  );
};

export default ShowAreaCalculation;
