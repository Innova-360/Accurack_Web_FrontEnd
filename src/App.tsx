import LandingPage from './pages/LandingPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <LandingPage/>
      <ToastContainer position="top-center" autoClose={3000} aria-label="notification" />
    </>
  )
}

export default App
