
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // ← Added FiX
import PrimaryButton from './../Buttons/PrimaryButton';
import SecondaryButton from './../Buttons/SecondaryButton';
import PortalDropdown from './../LandingPageComponents/PortalDropDown';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className='relative flex justify-between items-center h-20 bg-[var(--header-color)] drop-shadow-[rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.12)] overflow-x-hidden px-4 sm:px-6'>
      
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <img src="/logo.svg" className="md:w-10 md:h-10 w-10 h-10" alt="logo" />
        <img src="/logoName.svg" className="md:w-[93px] md:h-[33px] w-24 h-10" alt="Accurack" />
      </div>

      {/* Nav Links - only on large screens */}
      <div className="hidden lg:flex justify-around md:gap-6 lg:gap-10 text-[var(--dark-primary)]">
        <Link to="#">Product</Link>
        <Link to="#">Features</Link>
        <Link to="#">Industries</Link>
        <Link to="#">Resources</Link>
        <Link to="#">Pricing</Link>
      </div>

      {/* Buttons + Hamburger / Cross */}
      <div className="flex items-center gap-2.5">
        <SecondaryButton cssClasses='sec-button-hover'>Sign in</SecondaryButton>
        <div className="hidden lg:block">
          <PrimaryButton>Request Demo</PrimaryButton>
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
  );
}

export default Header;
