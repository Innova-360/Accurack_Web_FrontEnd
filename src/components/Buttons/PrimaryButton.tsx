import type { ReactNode, JSX } from 'react';


type PrimaryButtonProps = {
  children: ReactNode;
  cssClasses?: string;
  handler?: () => void;
};

function PrimaryButton({ children, cssClasses = '', handler }: PrimaryButtonProps): JSX.Element {
  return (
    <button
      className={`bg-[linear-gradient(30deg,_#065B6A_50%,_var(--primary-color)_100%)] text-[#F8FAFC] rounded-[34px] px-3.5 md:px-8 py-2.5 text-xs md:text-sm lg:text-sm button-hover ${cssClasses}`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
