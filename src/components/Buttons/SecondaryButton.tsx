import type { ReactNode, JSX } from 'react';

type SecondaryButtonProps = {
  children: ReactNode;
  cssClasses?: string;
  handler?: () => void;
};

function SecondaryButton({ children, cssClasses = '', handler }: SecondaryButtonProps): JSX.Element {
  return (
    <button
      className={`bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] rounded-[34px] px-3.5 md:px-8 py-2.5 text-xs md:text-sm lg:text-sm ${cssClasses} hover:cursor-pointer hover:bg-[linear-gradient(30deg,_#065B6A_50%,_var(--primary-color)_100%)] hover:text-white transition-colors duration-300`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
