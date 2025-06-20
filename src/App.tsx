import { Routes, Route } from 'react-router-dom';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import NoTrespassersBeyondThisPoint99 from './pages/NoTrespassersBeyondThisPoint99';
import LandingPage from './pages/LandingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />
        <Route
          path="/admin/noTrespassersBeyondThisPoint99"
          element={
            <AdminProtectedRoute>
              <NoTrespassersBeyondThisPoint99 />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} aria-label="notification" />
    </>
  );
}

export default App;
