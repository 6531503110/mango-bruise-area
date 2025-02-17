import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext';
import FirstHome from './components/FirstHome/FirstHome';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Verify from './components/Verify/Verify';
import ChangePassword from './components/ChangePassword/ChangePassword';
import ChangePasswordUpdate from './components/ChangePasswordUpdate/ChangePasswordUpdate';
import MainHome from './components/MainHome/MainHome';
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs';
import Feedback from './components/Feedback/Feedback';
import FeedbackSubmitted from './components/Feedback/FeedbackSubmitted';
import Dashboard from './components/Dashboard/Dashboard';
import UserProfile from './components/UserProfile/UserProfile';
import EditUserProfile from './components/EditUserProfile/EditUserProfile';
import ChangeProfilePassword from './components/ChangeProfilePassword/ChangeProfilePassword';
import NewPasswordUpdate from './components/NewPasswordUpdate/NewPasswordUpdate';
import BruiseAreaCalculation from './components/BruiseAreaCalculation/BruiseAreaCalculation';
import ShowAreaCalculation from './components/ShowAreaCalculation/ShowAreaCalculation';
import ExportCSVSuccessfully from './components/ExportCSVSuccessfully/ExportCSVSuccessfully';
import FeatureAnalysis from './components/FeatureAnalysis/FeatureAnalysis';
import ViewPhotoResults from './components/ViewPhotoResults/ViewPhotoResults';
import FeatureAnalysisResults from './components/FeatureAnalysisResults/FeatureAnalysisResults';
import ExportFeatureSuccessful from './components/ExportFeatureSuccessful/ExportFeatureSuccessful';
import Resize from './components/Resize/Resize';
import CropImage from './components/CropImage/CropImage';
import RemoveBackground from './components/RemoveBackground/RemoveBackground';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/firsthomepage" />} />
          <Route path="/firsthome" element={<FirstHome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/changepasswordupdate" element={<ChangePasswordUpdate />} />
          <Route path="/mainhome" element={<MainHome />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedbacksubmitted" element={<FeedbackSubmitted />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/edituserprofile" element={<EditUserProfile />} />
          <Route path="/changeprofilepassword" element={<ChangeProfilePassword />} />
          <Route path="/newpasswordupdate" element={<NewPasswordUpdate />} />
          <Route path="/bruiseareacalculation" element={<BruiseAreaCalculation />} />
          <Route path="/showareacalculation" element={<ShowAreaCalculation />} />
          <Route path="/exportcsvsuccessfully" element={<ExportCSVSuccessfully />} />
          <Route path="/featureanalysis" element={<FeatureAnalysis />} />
          <Route path="/viewphotoresults" element={<ViewPhotoResults />} />
          <Route path="/featureanalysisresults" element={<FeatureAnalysisResults />} />
          <Route path="/exportfeaturesuccessful" element={<ExportFeatureSuccessful />} />
          <Route path="/resize" element={<Resize />} />
          <Route path="/cropimage" element={<CropImage />} />
          <Route path="/removebackground" element={<RemoveBackground />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
