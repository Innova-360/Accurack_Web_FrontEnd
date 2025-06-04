// import { useState } from 'react';
// import { FaRegClipboard, FaShippingFast, FaHeadset, FaCaretRight } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// function InventoryManagement() {
//   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

//   const toggleFAQ = (id: number) => {
//     setOpenFAQ(openFAQ === id ? null : id);
//   };

//   return (
//     <>
//       <div className="border border-[rgba(41,39,39,0.12)] h-[1px] w-full overflow-hidden"></div>
//       <div className="w-full px-4 md:px-20 mt-40">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-5xl font-semibold text-[#0F172A]">
//             Transform Your Inventory <span className="text-[var(--primary-color)]">Management</span>
//           </h1>
//         </div>

//         {/* Cards Container */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-20 text-center md:mt-40 lg:mt-40 xl:mt-40 items-stretch">
//           {/* Card 1 */}
//           <div className="flex flex-col items-center justify-center space-y-4 col-span-1">
//             <FaRegClipboard size={50} className="text-[var(--primary-color)]" />
//             <h3 className="font-semibold text-xl">Start Your Free Trial</h3>
//             <p className=" text-gray-600 max-w-xs">
//               Begin your 30-day full-featured trial with no credit card required. Experience all enterprise features without limitation.
//             </p>
//             <div className="md:hidden w-full h-[1px] bg-[rgba(41,39,39,0.12)] mt-8"></div>
//           </div>

//           {/* Vertical Separator */}
//           <div className="hidden md:flex justify-center items-center">
//             <div className="h-4/5 w-[1px] bg-[rgba(41,39,39,0.12)]"></div>
//           </div>

//           {/* Card 2 */}
//           <div className="flex flex-col items-center justify-center space-y-4 col-span-1">
//             <FaShippingFast size={50} className="text-[var(--primary-color)]" />
//             <h3 className="font-semibold text-xl">Seamless Onboarding</h3>
//             <p className="text-gray-600 max-w-xs">
//               Our onboarding specialist helps import existing data in under 4 hours and configures the system to your business needs.
//             </p>
//             <div className="md:hidden w-full h-[1px] bg-[rgba(41,39,39,0.12)] mt-8"></div>
//           </div>

//           {/* Vertical Separator */}
//           <div className="hidden md:flex justify-center items-center">
//             <div className="h-4/5 w-[1px] bg-[rgba(41,39,39,0.12)]"></div>
//           </div>

//           {/* Card 3 */}
//           <div className="flex flex-col items-center justify-center space-y-4 col-span-1">
//             <FaHeadset size={40} className="text-[var(--primary-color)]" />
//             <h3 className="font-semibold text-xl">Ongoing Support</h3>
//             <p className="text-gray-600 max-w-xs">
//               Access 24/7 support via chat, phone, and email from our expert team. Plus, enjoy our risk-free 60-day money-back guarantee.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-[rgba(41,39,39,0.12)] w-full my-20 mt-40"></div>

//       {/* FAQ Section */}
//       <div className="w-full px-4 md:px-20">
//         <div className="space-y-14">

//           {/* Question 1 */}
//           <div>
//             <div className="flex items-start gap-2 text-left cursor-pointer" onClick={() => toggleFAQ(1)}>
//               <FaCaretRight className="text-[var(--primary-color)] mt-1.5" size={18} />
//               <h3 className="text-lg md:text-xl font-medium text-[var(--primary-color)]">
//                 How quickly can I get started?
//               </h3>
//             </div>
//             <AnimatePresence>
//               {openFAQ === 1 && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.4, ease: 'easeInOut' }}
//                   className="mt-4 text-lg text-[var(--primary-color)] max-w-2xl overflow-hidden"
//                 >
//                   You can start immediately. Our platform is ready out of the box, and our team assists with setup and data import in just a few hours.
//                   Most businesses are fully operational on the platform within one business day.
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Question 2 */}
//           <div>
//             <div className="flex items-start gap-2 text-left cursor-pointer" onClick={() => toggleFAQ(2)}>
//               <FaCaretRight className="text-[var(--primary-color)] mt-1.5" size={18} />
//               <h3 className="text-lg md:text-xl font-medium text-[var(--primary-color)]">
//                 Is there a long-term contract?
//               </h3>
//             </div>
//             <AnimatePresence>
//               {openFAQ === 2 && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.4, ease: 'easeInOut' }}
//                   className="mt-4 text-lg text-[var(--primary-color)] max-w-2xl overflow-hidden"
//                 >
//                   No long-term commitments are required. You can choose a monthly plan and cancel anytime.
//                   We also offer discounts for annual subscriptions, but they’re entirely optional.
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default InventoryManagement;




import { useState } from 'react';
import { FaRegClipboard, FaShippingFast, FaHeadset, FaCaretRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function InventoryManagement() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <div className="border border-[rgba(41,39,39,0.12)] h-[1px] w-full overflow-hidden"></div>
      <div className="w-full px-4 md:px-20 mt-40">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0F172A]">
            Transform Your Inventory <span className="text-[var(--primary-color)]">Management</span>
          </h1>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-20 text-center md:mt-40 lg:mt-40 xl:mt-40 items-stretch">
          {/* Card 1 */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 col-span-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={0}
          >
            <FaRegClipboard size={50} className="text-[var(--primary-color)]" />
            <h3 className="font-semibold text-xl">Start Your Free Trial</h3>
            <p className=" text-gray-600 max-w-xs">
              Begin your 30-day full-featured trial with no credit card required. Experience all enterprise features without limitation.
            </p>
            <div className="md:hidden w-full h-[1px] bg-[rgba(41,39,39,0.12)] mt-8"></div>
          </motion.div>

          {/* Vertical Separator */}
          <div className="hidden md:flex justify-center items-center">
            <div className="h-4/5 w-[1px] bg-[rgba(41,39,39,0.12)]"></div>
          </div>

          {/* Card 2 */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 col-span-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={1}
          >
            <FaShippingFast size={50} className="text-[var(--primary-color)]" />
            <h3 className="font-semibold text-xl">Seamless Onboarding</h3>
            <p className="text-gray-600 max-w-xs">
              Our onboarding specialist helps import existing data in under 4 hours and configures the system to your business needs.
            </p>
            <div className="md:hidden w-full h-[1px] bg-[rgba(41,39,39,0.12)] mt-8"></div>
          </motion.div>

          {/* Vertical Separator */}
          <div className="hidden md:flex justify-center items-center">
            <div className="h-4/5 w-[1px] bg-[rgba(41,39,39,0.12)]"></div>
          </div>

          {/* Card 3 */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 col-span-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={2}
          >
            <FaHeadset size={40} className="text-[var(--primary-color)]" />
            <h3 className="font-semibold text-xl">Ongoing Support</h3>
            <p className="text-gray-600 max-w-xs">
              Access 24/7 support via chat, phone, and email from our expert team. Plus, enjoy our risk-free 60-day money-back guarantee.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[rgba(41,39,39,0.12)] w-full my-20 mt-40"></div>

      {/* FAQ Section */}
      <div className="w-full px-4 md:px-20">
        <div className="space-y-14">

          {/* Question 1 */}
          <div>
            <div className="flex items-start gap-2 text-left cursor-pointer" onClick={() => toggleFAQ(1)}>
              <FaCaretRight className="text-[var(--primary-color)] mt-1.5" size={18} />
              <h3 className="text-lg md:text-xl font-medium text-[var(--primary-color)]">
                How quickly can I get started?
              </h3>
            </div>
            <AnimatePresence>
              {openFAQ === 1 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="mt-4 text-lg text-gray-500 max-w-2xl overflow-hidden"
                >
                  You can start immediately. Our platform is ready out of the box, and our team assists with setup and data import in just a few hours.
                  Most businesses are fully operational on the platform within one business day.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Question 2 */}
          <div>
            <div className="flex items-start gap-2 text-left cursor-pointer" onClick={() => toggleFAQ(2)}>
              <FaCaretRight className="text-[var(--primary-color)] mt-1.5" size={18} />
              <h3 className="text-lg md:text-xl font-medium text-[var(--primary-color)]">
                Is there a long-term contract?
              </h3>
            </div>
            <AnimatePresence>
              {openFAQ === 2 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="mt-4 text-lg text-gray-500 max-w-2xl overflow-hidden"
                >
                  No long-term commitments are required. You can choose a monthly plan and cancel anytime.
                  We also offer discounts for annual subscriptions, but they’re entirely optional.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryManagement;
