
type CashFlowCardProps = {
  icon?: string;
  title: string;
  description: string;
  className: string;
};

function CashFlowCards({ icon, title, description, className }: CashFlowCardProps) {
  return (
    <div className={`flex gap-5 p-6 bg-white rounded-xl shadow-md border border-[rgba(0,0,0,0.12)] w-[100%] lg:h-full lg:w-[90%] justify-center items-center ${className}`}>
      <div className="text-[var(--primary-color)] mb-3"><img src={icon} alt="icon" className='size-36' /></div>
      <div className="flex flex-col items-start ">
        <div className="font-semibold md:text-3xl text-xl text-[var(--primary-color)] mb-2">{title}</div>
        <p className="text-[var(--text-gray)]">{description}</p>
      </div>
    </div>
  );
}

export default CashFlowCards;

