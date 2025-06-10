import { useState } from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../Buttons/PrimaryButton';
import { toast } from 'react-toastify';
import CalendlyWidgetWithEvent from '../LandingPageComponents/CalendlyWidgetWithEvent';


const allCountryCodes = [
  '+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+36', '+39', '+40', '+41', '+43', '+44', '+45', '+46', '+47', '+48', '+49', '+51', '+52', '+53', '+54', '+55', '+56', '+57', '+58', '+60', '+61', '+62', '+63', '+64', '+65', '+66', '+81', '+82', '+84', '+86', '+90', '+91', '+92', '+93', '+94', '+95', '+98', '+211', '+212', '+213', '+216', '+218', '+220', '+221', '+222', '+223', '+224', '+225', '+226', '+227', '+228', '+229', '+230', '+231', '+232', '+233', '+234', '+235', '+236', '+237', '+238', '+239', '+240', '+241', '+242', '+243', '+244', '+245', '+246', '+248', '+249', '+250', '+251', '+252', '+253', '+254', '+255', '+256', '+257', '+258', '+260', '+261', '+262', '+263', '+264', '+265', '+266', '+267', '+268', '+269', '+290', '+291', '+297', '+298', '+299', '+350', '+351', '+352', '+353', '+354', '+355', '+356', '+357', '+358', '+359', '+370', '+371', '+372', '+373', '+374', '+375', '+376', '+377', '+378', '+380', '+381', '+382', '+383', '+385', '+386', '+387', '+389', '+420', '+421', '+423', '+500', '+501', '+502', '+503', '+504', '+505', '+506', '+507', '+508', '+509', '+590', '+591', '+592', '+593', '+594', '+595', '+596', '+597', '+598', '+599', '+670', '+672', '+673', '+674', '+675', '+676', '+677', '+678', '+679', '+680', '+681', '+682', '+683', '+685', '+686', '+687', '+688', '+689', '+690', '+691', '+692', '+850', '+852', '+853', '+855', '+856', '+870', '+871', '+872', '+873', '+874', '+878', '+880', '+881', '+882', '+883', '+886', '+888', '+960', '+961', '+962', '+963', '+964', '+965', '+966', '+967', '+968', '+970', '+971', '+972', '+973', '+974', '+975', '+976', '+977', '+992', '+993', '+994', '+995', '+996', '+998', '+1242', '+1246', '+1264', '+1268', '+1284', '+1340', '+1345', '+1441', '+1473', '+1649', '+1664', '+1670', '+1671', '+1684', '+1758', '+1767', '+1784', '+1787', '+1809', '+1868', '+1869', '+1876', '+1939'
];

interface LeadFormState {
  name: string;
  phone: string;
  businessName: string;
  industry: string;
  address: string;
  email: string;
  help?: string;
  companyWeb?: string;
  countryCode?: string;
}

const initialState: LeadFormState = {
  name: '',
  phone: '',
  businessName: '',
  industry: '',
  address: '',
  email: '',
  help: '',
  companyWeb: '',
  countryCode: '',
};

interface LeadFormProps {
  onClose?: () => void;
}

const LeadForm = ({ onClose }: LeadFormProps) => {
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendlyData, setCalendlyData] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  const handleCalendlyScheduled = async (eventData: any) => {
    setCalendlyData(eventData);
    try {
      const response = await fetch('https://accurackwebbackend-production.up.railway.app/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, calendly: eventData }),
      });
      if (!response.ok) {
        toast.error('Failed to submit lead');
      } else {
        toast.success('Your message is submitted');
        setForm(initialState);
        setShowCalendly(false);
        setCalendlyData(null);
        if (onClose) onClose();
      }
    } catch (error) {
      toast.error('Error submitting lead');
      console.error('Error submitting lead:', error);
    }
  };

  if (showCalendly) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-xl mx-auto bg-white rounded-2xl p-8 mt-10 mb-10 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--primary-color)]">Book a Meeting</h2>
        <CalendlyWidgetWithEvent
          userName={form.name}
          userEmail={form.email}
          onEventScheduled={handleCalendlyScheduled}
        />
        <button className="mt-6 text-sm text-blue-600 underline" onClick={() => setShowCalendly(false)}>
          Back to form
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-xl mx-auto bg-white rounded-2xl p-8 mt-10 mb-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-[var(--primary-color)]">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all"
            />
          </div>
          <div className="flex-1 flex">
            <div className="">
              <label className="block mb-1 font-medium text-gray-700">Code</label>
              <input
                type="text"
                name="countryCode"
                // list="country-codes"
                value={form.countryCode || ''}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all w-24"
                placeholder="+1"
                autoComplete="off"
              />
              {/* <datalist id="country-codes">
                {allCountryCodes.map(code => (
                  <option key={code} value={code} />
                ))}
              </datalist> */}
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all border-l-0"
                placeholder="5551234567"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Industry</label>
            <input
              type="text"
              name="industry"
              value={form.industry}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Company Web <span className="text-gray-400 text-xs">(Optional)</span></label>
            <input
              type="url"
              name="companyWeb"
              value={form.companyWeb}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all"
              placeholder="https://yourcompany.com"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">How can we help? <span className="text-gray-400 text-xs">(Optional)</span></label>
          <textarea
            name="help"
            value={form.help}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all resize-none"
            placeholder="Let us know how we can help..."
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center"
        >
          <PrimaryButton cssClasses="w-full rounded-xl text-base py-3 mt-2">
            Submit
          </PrimaryButton>
        </motion.div>
      </form>
    </motion.div>
  );
}

export default LeadForm;
