

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
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols flex flex-col justify-center items-center gap-14 mt-24 max-w-6xl mx-auto w-full">
        {['left', 'right', 'left', 'right'].map((direction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction === 'left' ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full flex justify-center"
          >
            <img src={`/Automated${index+1}.png`} className="max-w-[540px] w-full md:w-[440px] lg:w-[540px] h-auto object-contain" alt="picture" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Automated;
