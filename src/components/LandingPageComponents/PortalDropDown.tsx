// import { createPortal } from 'react-dom';
// import { Link } from 'react-router-dom';

// type PortalDropdownProps = {
//   onClose: () => void;
// };

// function PortalDropdown({ onClose }: PortalDropdownProps) {
//   return createPortal(
//     <div className="fixed top-20 right-4 bg-[var(--primary-color)] shadow-lg rounded-lg py-3 px-5 z-[9999] flex flex-col gap-3 text-[#ffffff] lg:hidden">
//       <Link to="#" onClick={onClose}>Product</Link>
//       <Link to="#" onClick={onClose}>Features</Link>
//       <Link to="#" onClick={onClose}>Industries</Link>
//       <Link to="#" onClick={onClose}>Resources</Link>
//       <Link to="#" onClick={onClose}>Pricing</Link>
//       <Link to="#" onClick={onClose}>Request Demo</Link>
//     </div>,
//     document.body
//   );
// }

// export default PortalDropdown;



import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

type PortalDropdownProps = {
  onClose: () => void;
};

const links = [
  'Product',
  'Features',
  'Industries',
  'Resources',
  'Pricing',
  'Request Demo',
];

function PortalDropdown({ onClose }: PortalDropdownProps) {
  return createPortal(
    <div className="fixed top-20 right-4 bg-[var(--primary-color)] shadow-lg rounded-lg py-3 px-5 z-[9999] flex flex-col text-[#ffffff] lg:hidden min-w-[160px]">
      {links.map((label, index) => (
        <div key={label}>
          <Link to="#" onClick={onClose}>{label}</Link>
          {index < links.length - 1 && (
            <div className="border-t border-white/30 my-2" />
          )}
        </div>
      ))}
    </div>,
    document.body
  );
}

export default PortalDropdown;
