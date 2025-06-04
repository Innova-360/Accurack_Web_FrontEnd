import { useState } from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../Buttons/PrimaryButton';

interface LeadFormState {
  name: string;
  phone: string;
  countryCode: string;
  businessName: string;
  industry: string;
  address: string;
  email: string;
  help?: string;
  companyWeb?: string;
}

const initialState: LeadFormState = {
  name: '',
  phone: '',
  countryCode: '',
  businessName: '',
  industry: '',
  address: '',
  email: '',
  help: '',
  companyWeb: '',
};

const LeadForm = () => {
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: send form data to backend or API
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 mb-10"
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
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all"
            />
          </div>
          <div className="w-32">
            <label className="block mb-1 font-medium text-gray-700">Country Code</label>
            <input
              type="text"
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all"
              placeholder="e.g. +1"
            />
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
            {submitted ? 'Submitted!' : 'Submit'}
          </PrimaryButton>
        </motion.div>
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center mt-2"
          >
            Thank you! We have received your information.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}

export default LeadForm;
