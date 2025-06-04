// function Automated() {
//   return (
//     <div
//       className="relative w-full overflow-x-hidden bg-[var(--primary-color)] pb-28"
//     >

//         <div className="mt-20 text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col justify-center items-center">
//           <div className=''>Automated Supplier <span className="text-[#1ecdec]">Management</span></div>
//           {/* <img src="/underlineLight.svg" className='size-1/4 ml-80' alt="underline" /> */}
//         </div>
//         <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols flex flex-col justify-center gap-15 mt-24 place-items-center">
//           <div><img src="/Automated1.svg" className='size-[95%]' alt="picture" /></div>
//           <div><img src="/Automated1.svg" className='size-[95%]' alt="picture" /></div>
//           <div><img src="/Automated1.svg" className='size-[95%]' alt="picture" /></div>
//           <div><img src="/Automated1.svg" className='size-[95%]' alt="picture" /></div>
//         </div>
//     </div>
//   );
// }

// export default Automated;




import { motion } from 'framer-motion';

function Automated() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[var(--primary-color)] pb-28">
      {/* Title */}
      <div className="mt-20 text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col justify-center items-center">
        <div>Automated Supplier <span className="text-[#1ecdec]">Management</span></div>
        {/* <img src="/underlineLight.svg" className='size-1/4 ml-80' alt="underline" /> */}
      </div>

      {/* Grid of Images with Animation */}
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols flex flex-col justify-center gap-15 mt-24 place-items-center px-4">
        {['left', 'right', 'left', 'right'].map((direction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction === 'left' ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img src={`/Automated1.svg`} className="size-[90%]" alt="picture" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Automated;
