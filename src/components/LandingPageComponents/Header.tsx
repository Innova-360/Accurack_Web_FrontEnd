import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // ← Added FiX
import PrimaryButton from './../Buttons/PrimaryButton';
import SecondaryButton from './../Buttons/SecondaryButton';
import PortalDropdown from './../LandingPageComponents/PortalDropDown';
import LeadForm from '../Forms/LeadForm';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const openLeadForm = () => {
    setShowLeadForm(true);
  };
  const closeLeadForm = () => {
    setShowLeadForm(false);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showLeadForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showLeadForm]);

  return (
    <>
      <div className='relative flex justify-between items-center h-20 bg-[var(--header-color)] drop-shadow-[rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.12)] overflow-x-hidden px-4 sm:px-6'>
        
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" className="md:w-10 md:h-10 w-10 h-10" alt="logo" />
          <img src="/logoName.svg" className="md:w-[93px] md:h-[33px] w-24 h-10" alt="Accurack" />
        </div>

        {/* Nav Links - only on large screens */}
        <div className="hidden lg:flex justify-around md:gap-6 lg:gap-10 text-[var(--dark-primary)]">
          <Link to="#">Features</Link>
          <Link to="#">Industries</Link>  
          <Link to="#">About</Link> 
          <Link to="#" >Get in touch</Link> 
        </div>

        {/* Buttons + Hamburger / Cross */}
        <div className="flex items-center gap-2.5">
          <SecondaryButton cssClasses='sec-button-hover'>Sign in</SecondaryButton>
          <div className="hidden lg:block">
            <PrimaryButton handler={openLeadForm}>Request Demo</PrimaryButton>
          </div>

          {/* Hamburger / Cross Icon Toggle */}
          <div className="lg:hidden ml-2">
            {isMenuOpen ? (
              <FiX size={24} color="#117D90" onClick={toggleMenu} className="cursor-pointer" />
            ) : (
              <FiMenu size={24} color="#117D90" onClick={toggleMenu} className="cursor-pointer" />
            )}
          </div>
        </div>

        {/* Portal Dropdown */}
        {isMenuOpen && <PortalDropdown onClose={() => setIsMenuOpen(false)} />}
      </div>

      {/* Lead Form Modal Overlay */}
      {showLeadForm && (
        <div className="fixed inset-0 z-[99999] flex justify-center bg-black/60 pointer-events-auto overflow-y-auto" style={{ overscrollBehavior: 'none' }}>
          <div
            className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg mt-8 mb-8 self-start"
          >
            <button
              onClick={closeLeadForm}
              className="absolute top-2 right-2 text-gray-600 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
              aria-label="Close Lead Form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <LeadForm onClose={closeLeadForm} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
