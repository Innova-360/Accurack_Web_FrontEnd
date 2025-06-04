// import SecondaryButton from "../Buttons/SecondaryButton";

// function FinancialReporting() {
//     return (
//         <div className='mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center justify-center md:pl-20 overflow-x-hidden'>
//             {/* Column 1 - Heading */}
//             <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#0F172A] fonts text-center gap-1.5 flex flex-col">
//                 <div>
//                     Comprehensive Financial <span className="text-[var(--primary-color)]">Reporting</span>
//                 </div>
//                 {/* <img src="/underline.svg" className="md:ml-0 m-auto" alt="underline" /> */}
//             </div>

//             {/* Column 2 - Image (spanning two rows) */}
//             <div className='md:w-[90%] lg:w-[95%] w-[60%] row-span-2 m-auto'>
//                 <img src="/financial.png" alt="Illustration of financial reporting" className='w-full' />
//             </div>

//             {/* Column 1 - Desktop financial card */}
//             <div className='w-full mt-14 md:mt-7 lg:mt-7 hidden md:block'>
//                 <img src="/financialCard2.png" alt="Desktop financial summary card" className='w-full' />
//             </div>

//             {/* Mobile-only financial card (stays full width below grid) */}
//             <div className='w-[90%] m-auto mt-10 md:hidden'>
//                 <img src="/financialCard1.png" alt="Mobile financial summary card" className='w-full' />
//             </div>

//             <div className="mt-10">
//                 <SecondaryButton cssClasses='flex gap-3 on-hover px-10 ml-10 md:ml-0 lg:ml-0'>
//                     Learn more →
//                 </SecondaryButton>
//             </div>
//         </div>
//     );
// }

// export default FinancialReporting;



import { motion } from 'framer-motion';
import SecondaryButton from "../Buttons/SecondaryButton";

function FinancialReporting() {
    return (
        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center justify-center md:pl-20 overflow-x-hidden'>
            {/* Column 1 - Heading */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#0F172A] fonts text-center gap-1.5 flex flex-col"
            >
                <div>
                    Comprehensive Financial <span className="text-[var(--primary-color)]">Reporting</span>
                </div>
                {/* <img src="/underline.svg" className="md:ml-0 m-auto" alt="underline" /> */}
            </motion.div>

            {/* Column 2 - Rotating Image */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className='md:w-[90%] lg:w-[95%] w-[60%] row-span-2 m-auto'
            >
                <img src="/financial.png" alt="Illustration of financial reporting" className='w-full' />
            </motion.div>

            {/* Column 1 - Desktop card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className='w-full mt-14 md:mt-7 lg:mt-7 hidden md:block'
            >
                <img src="/financialCard2.png" alt="Desktop financial summary card" className='w-full' />
            </motion.div>

            {/* Mobile-only card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className='w-[90%] m-auto mt-10 md:hidden'
            >
                <img src="/financialCard1.png" alt="Mobile financial summary card" className='w-full' />
            </motion.div>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="mt-10"
            >
                <SecondaryButton cssClasses='flex gap-3 on-hover px-10 ml-10 md:ml-0 lg:ml-0'>
                    Learn more →
                </SecondaryButton>
            </motion.div>
        </div>
    );
}

export default FinancialReporting;
