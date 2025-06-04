import type { ReactNode, JSX } from 'react';

type SecondaryButtonProps = {
  children: ReactNode;
  cssClasses?: string;
  handler?: () => void;
};

function SecondaryButton({ children, cssClasses = '', handler }: SecondaryButtonProps): JSX.Element {
  return (
    <button
      className={`bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] rounded-[34px] px-5 py-2.5 text-xs md:text-sm lg:text-sm ${cssClasses}`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
