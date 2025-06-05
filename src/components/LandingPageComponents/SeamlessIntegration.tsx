

import { motion } from 'framer-motion';

function SeamlessIntegration() {
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-20 bg-[var(--primary-color)] overflow-x-hidden'>
        {/* ...heading and desktop content... */}
        <div className="mt-20 text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col">
          <div className=''>Seamless POS <span className="text-[#50BED2]">Integration</span></div>
          {/* <img src="/underlineLight.svg" className="md:ml-96 lg:ml:96 m-auto" alt="underline" /> */}
        </div>
        <div className='hidden md:block lg:block xl:block lg:w-[85%] xl:w-[85%] mt-20 px-4'>
          <img src="/phone.png" alt="phone" />
        </div>


        {/* 🔥 Mobile grid with animated cards */}
        <div className="flex flex-col md:hidden justify-center items-center mt-10 w-[100%] gap-0">
          {["/seamlessCard1.svg", "/seamlessCard2.svg", "/seamlessCard3.svg", "/seamlessCard4.svg"].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 + i * 0.1, ease: "easeOut" }}
              className="w-full"
            >
              <img src={src} alt={`Card ${i + 1}`} className="w-full" />
            </motion.div>
          ))}
        </div>

        {/* mobile phone image below cards */}
        <div className='md:hidden lg:hidden xl:hidden w-[85%] mt-5 px-4'>
          <img src="/phone2.png" alt="phone" />
        </div>
      </div>

      {/* decorative lines */}
      <div className='relative md:h-[9rem] lg:h-[9rem] h-[6rem] -z-10 bottom-14 md:bottom-64 lg:bottom-64'>
        <img src="/lines.svg" alt="lines" />
      </div>
    </>
  );
}

export default SeamlessIntegration;
