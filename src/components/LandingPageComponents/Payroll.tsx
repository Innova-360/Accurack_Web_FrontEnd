
// components/Payroll.tsx

import React from 'react';
import PayrollCard from '../Cards/PayrollCard';

const Payroll: React.FC = () => {
    
    return (
        <div className="relative w-full overflow-x-hidden h-[700px] bg-[#F9FEFF] overflow-hidden flex items-center justify-center px-4 mt-20">
            {/* Background SVGs */}
            <img
                src="/curvesTopLeft.svg"
                alt="Top Left Curve"
                className="absolute md:top-[-75px] lg:top-[-75px] -top-20 -left-10 w-[30vw] max-w-[600px] min-w-[200px] object-contain transition-all duration-300 z-10"
            />
            <img
                src="/curvesBottomRight.svg"
                alt="Bottom Right Curve"
                className="absolute bottom-0 right-0 w-[40vw] max-w-[600px] min-w-[200px] object-contain transition-all duration-300 z-10"
            />
            <img
                src="/streamLinedArrow.svg"
                alt="Top Right Arrow"
                className="absolute top-10 right-0 w-[8vw] max-w-[120px] min-w-[50px] object-contain transition-all duration-300 z-10"
            />

            {/* Content */}
            <div className="relative top-20 md:top-0 lg:top-0 z-20 text-center max-w-6xl w-full">
                <h1 className="text-3xl md:text-5xl font-semibold text-[#0F172A] relative bottom-30">
                    Streamlined Payroll <span className="text-[var(--primary-color)]">Management</span>
                </h1>
                {/* <img src="/underline.svg" alt="underline" className="mx-auto my-2" /> */}

                {/* Cards */}
                <div className="flex flex-row md:justify-center gap-6 overflow-x-auto md:overflow-x-visible px-4 md:px-0 snap-x snap-mandatory scroll-smooth">
                    <PayrollCard
                        heading="FEATURE"
                        list={[
                            'Labor Cost Tracking',
                            'Productivity Analysis',
                            'Time Tracking',
                            'Commission Calculations',
                            'Payroll Sync',
                        ]}
                    />
                    <PayrollCard
                        heading="BENEFIT"
                        list={[
                            'Reduce Payroll Costs By 5–22%',
                            'Increase Staff Efficiency By 27%',
                            'Save 5–7 Hours On Admin Tasks Weekly',
                            'Increase Sales Motivation By 31%',
                            'Eliminate Double-Entry Errors',
                        ]}
                    />
                    <PayrollCard
                        heading="INTEGRATION"
                        list={[
                            'All Major Timekeeping Systems',
                            'Biometric And Mobile Time Clocks',
                            'CRM And Sales Platforms',
                            'Performance Management Tools',
                            'QuickBooks, Xero, ADP, Etc.',
                        ]}
                    />
                </div>

            </div>
        </div>
    );
};

export default Payroll;

