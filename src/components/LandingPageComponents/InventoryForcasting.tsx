import { motion } from 'framer-motion';

function InventoryForcasting() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-40 lg:mt-40 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl px-5 md:text-5xl lg:text-5xl font-bold text-[#0F172A] fonts text-center gap-1.5 flex flex-col"
      >
        <div>
          Intelligent Inventory <span className="text-[var(--primary-color)]">Forecasting</span>
        </div>
        <img src="/underline.svg" className="md:ml-96 lg:ml:96 m-auto" alt="underline" />
      </motion.div>

      {/* Images */}
      <div className="relative mt-10 flex flex-col md:flex-row lg:flex-row md:gap-10 lg:gap-10 items-center justify-center md:w-[50vw] lg:w-[50vw]">
        {/* Phone pentagon (visible on smaller screens) */}
        <motion.img
          src="/pentagonPhone.png"
          alt="pentagon"
          className="xl:hidden size-1/2 mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        />

        {/* Main inventory image */}
        <motion.img
          src="/inventory.png"
          alt="picture"
          className="md:h-[70vh] lg:h-[70vh] w-[90vw]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />

        {/* Pentagon PC (visible on desktop) */}
        <motion.img
          src="/pentagonPc.png"
          alt="pentagon"
          className="hidden xl:block h-[70vh] ml-40"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default InventoryForcasting;
