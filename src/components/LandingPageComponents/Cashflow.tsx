import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import CashFlowCards from '../Cards/CashFlowCards';

function Cashflow() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-4 py-10 overflow-x-hidden overflow-hidden">
      {/* Heading */}
      <div className="mt-32 md:text-5xl lg:text-5xl text-4xl font-bold text-[#0F172A] fonts text-center flex flex-col gap-1.5 justify-center items-center">
        <div>
          Cash Flow <span className="text-[var(--primary-color)]">Optimization</span> Engine
        </div>
        <img src="/underline.svg" alt="underline" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {[ // config for brevity
          {
            icon: "/icons/moneyIcon.svg",
            title: "Reduce Tied-Up Capital",
            description:
              "Free up to 42% of your capital within just 90 days by optimizing inventory levels and purchase timing.",
            x: -80,
          },
          {
            icon: "/icons/pcIcon.svg",
            title: "Real-Time Forecasting",
            description:
              "Experience 95% accurate cash flow predictions that help you make informed financial decisions.",
            x: 80,
          },
          {
            icon: "/icons/disclaimerIcon.svg",
            title: "Smart Alerts",
            description:
              "Receive proactive cash preservation alerts before you reach critical thresholds, preventing cash crunches.",
            x: -80,
          },
          {
            icon: "/icons/settingsIcon.svg",
            title: "Automated Payments",
            description:
              "Schedule supplier payments intelligently to maximize cash availability while maintaining vendor relationships.",
            x: 80,
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: card.x }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              scale={1.02}
              transitionSpeed={3000}
              tiltMaxAngleX={25}
              tiltMaxAngleY={10}
              className="w-full"
            >
              <CashFlowCards
                className="mx-auto"
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cashflow;
