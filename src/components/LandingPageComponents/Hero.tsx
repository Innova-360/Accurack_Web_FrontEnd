import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from './../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import LeadForm from '../Forms/LeadForm';
import GetInTouch from '../Forms/GetInTouch';

function Hero() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showGetInTouchForm, setShowGetInTouchForm] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const openLeadForm = () => {
    setShowLeadForm(true);
  };
  const closeLeadForm = () => {
    setShowLeadForm(false);
  };

  const openGetInTouchForm = () => setShowGetInTouchForm(true);
  const closeGetInTouchForm = () => setShowGetInTouchForm(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showLeadForm || showGetInTouchForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showLeadForm, showGetInTouchForm]);

  return (
    <div className='flex w-full relative z-10 overflow-hidden flex-col md:flex-row lg:flex-row h-max justify-center bg-[linear-gradient(0deg,_#ffffff_30%,_var(--header-color)_100%)]'>

      {/* Left Side - Animated Together */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-5 top-margin md:ml-20 lg:ml-20 md:w-[65rem] lg:[27rem] media-hero-text relative'
      >
        {/* Synced Arrow */}
        {/* <img className='absolute z-10 lg:-top-30 lg:left-[75%] md:-top-10 md:left-[50%] hidden md:block lg:block' src="/arrow.svg" alt="" /> */}

        {/* Text Content */}
        <div className='flex flex-col w-[75%] gap-6'>
          <h1 className='text-4xl text-[#0F172A] fonts'>
            Revolutionary <span className='text-[var(--primary-color)]'>Inventory</span> Management: Transform Your <span className='text-[var(--primary-color)]'>Business</span> Cashflow
          </h1>
          <p className='text-[#475569] text-sm'>
            AI-powered system that resolves 87% of cashflow issues, trusted by 1000+ businesses across 35 countries. Experience an average 32% reduction in excess inventory costs with our comprehensive solution
          </p>
        </div>

        {/* Input & Button */}
        <div className='flex gap-2.5 justify-center md:justify-start lg:justify-start xl:justify-start items-center'>
          {/* <input type="text" placeholder='Enter your email' disabled className='hero-input' /> */}
          <PrimaryButton cssClasses='rounded-sm' handler={openLeadForm}>Request Demo</PrimaryButton>
          <SecondaryButton cssClasses='rounded-sm font-medium' handler={openGetInTouchForm}>Get in touch</SecondaryButton>
        </div>
      </motion.div>

      {/* Right Side - Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block w-[100%] h-[98vh] mt-20"
      >
        <img src="/phoneHero.png" className="m-0 p-0 h-[120%] object-cover relative right-0" alt="picture" />
      </motion.div>

      {/* Right Side - Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="md:hidden flex justify-center items-center w-full h-[50vh] mt-5"
      >
        <img src="/phoneHero.png" className="w-[80%] mx-auto mt-4" alt="mobile version" />
      </motion.div>






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
      {/* Get In Touch Modal Overlay */}
      {showGetInTouchForm && (
        <div className="fixed inset-0 z-[99999] flex justify-center bg-black/60 pointer-events-auto overflow-y-auto" style={{ overscrollBehavior: 'none' }}>
          <div
            className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg mt-8 mb-8 self-start"
          >
            <button
              onClick={closeGetInTouchForm}
              className="absolute top-2 right-2 text-gray-600 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
              aria-label="Close Get In Touch Form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <GetInTouch onClose={closeGetInTouchForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
