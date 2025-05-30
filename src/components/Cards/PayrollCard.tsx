// components/PayrollCard.tsx

import React from 'react';

interface PayrollCardProps {
  heading: string;
  list: string[];
  icon?: React.ReactNode; 
}

const PayrollCard: React.FC<PayrollCardProps> = ({ heading, list, icon }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl min-w-[260px] md:min-w-0 snap-start w-[45%] min-h-[15rem]">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-[var(--primary-color)] font-semibold mb-2 text-3xl text-left">{heading}</h3>
      <ul className="mt-5 text-gray-600 text-sm space-y-1 ml-5 text-left list-disc">
        {list.map((item, index) => (
          <li key={index} className=''>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PayrollCard;
