// import PrimaryButton from './../Buttons/PrimaryButton'

// function Hero() {
//   return (
//     <div className='flex w-full relative z-10 overflow-hidden flex-col md:flex-row lg:flex-row h-max justify-center bg-[linear-gradient(0deg,_#ffffff_30%,_var(--header-color)_100%)]'>
//       {/* left side */}
//       <div className='flex flex-col gap-5 top-margin md:ml-20 lg:ml-20 md:w-[65rem] lg:[27rem] media-hero-text'>
//         <div>
//           {/* <SecondaryButton cssClasses='flex gap-3 on-hover'>
//             <img src="/icons/chatIcon.svg" alt="" />
//             Chat with us
//           </SecondaryButton> */}
//           <img className='absolute z-10 top-32 left-[35%] hidden md:block lg:block' src="/arrow.svg" alt="" />
//         </div>
//         <div className='flex flex-col w-[75%] gap-6'>
//           <h1 className='text-4xl text-[#0F172A] fonts'>
//             Revolutionary <span className='text-[var(--primary-color)]'>Inventory</span> Management: Transform Your <span className='text-[var(--primary-color)]'>Business</span> Cashflow
//           </h1>
//           <p className='text-[#475569] text-sm'>
//             AI-powered system that resolves 87% of cashflow issues, trusted by 10,000+  businesses across 35 countries. Experience an average 32% reduction in  excess inventory costs with our comprehensive solution
//           </p>
//         </div>
//         <div className='flex gap-2.5 justify-center md:justify-start lg:justify-start xl:justify-start items-center'>
//           <input type="text" placeholder='Input text here' className='hero-input' />
//           <PrimaryButton cssClasses='rounded-sm'>Request Demo-</PrimaryButton>
//         </div>
//       </div>


//       {/* right side */}
//       {/* right side - visible only on medium and up */}
//       <div className="hidden md:block w-[100%] h-[98vh] mt-20">
//         <img src="/PhoneHero.svg" className="w-full m-0 p-0" alt="picture" />
//       </div>

//       {/* right side alternative for mobile only */}
//       <div className="md:hidden flex justify-center items-center w-full h-[50vh] mt-5">
//         <img src="/phoneHeroFull.svg" className="w-[80%] mx-auto mt-4" alt="mobile version" />
//       </div>
//     </div>
//   )
// }

// export default Hero




import { motion } from 'framer-motion';
import PrimaryButton from './../Buttons/PrimaryButton';

function Hero() {
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
            AI-powered system that resolves 87% of cashflow issues, trusted by 10,000+ businesses across 35 countries. Experience an average 32% reduction in excess inventory costs with our comprehensive solution
          </p>
        </div>

        {/* Input & Button */}
        <div className='flex gap-2.5 justify-center md:justify-start lg:justify-start xl:justify-start items-center'>
          <input type="text" placeholder='Input text here' className='hero-input' />
          <PrimaryButton cssClasses='rounded-sm'>Request Demo-</PrimaryButton>
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
        <img src="/PhoneHero.svg" className="w-full m-0 p-0" alt="picture" />
      </motion.div>

      {/* Right Side - Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="md:hidden flex justify-center items-center w-full h-[50vh] mt-5"
      >
        <img src="/phoneHeroFull.svg" className="w-[80%] mx-auto mt-4" alt="mobile version" />
      </motion.div>
    </div>
  );
}

export default Hero;
