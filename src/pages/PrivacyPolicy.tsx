import React from 'react';
import Header from '../components/LandingPageComponents/Header';
import Footer from '../components/LandingPageComponents/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
<>     <Header/>
    <div className="min-h-screen bg-[#F3FDFF] py-12 px-4 sm:px-6 lg:px-8 text-[--text-gray]">

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-[--text-gray] max-w-2xl mx-auto">
            At Accurack, we are committed to protecting your privacy and ensuring
            the security of your personal and business data. This Privacy Policy explains
            how we collect, use, and safeguard your information when you use our mobile app.
          </p>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-lg shadow-lg p-8 md:p-12">

          {/* Section 1: Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy describes how Accurack (“we”, “our”, or “us”) collects, uses, and protects personal and business information when you use the Accurack mobile application (“App”). By accessing or using the App, you agree to the practices described in this Policy.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-medium text-[--dark-primary] mb-3">2.1 User-Provided Information</h3>
            <ul className=" pl-6 mb-4">
              <li className="pl-4">2.1.1&nbsp;&nbsp;&nbsp;&nbsp;Account Data: Name, email address, phone number, store name.</li>
              <li className="pl-4">2.1.2&nbsp;&nbsp;&nbsp;&nbsp;Business Data: Inventory entries, sales and purchase records, expense tracking, and other store-specific information.</li>
              <li className="pl-4">2.1.3&nbsp;&nbsp;&nbsp;&nbsp;Login Information: Encrypted credentials.</li>
            </ul>
            <h3 className="text-xl font-medium text-[--dark-primary] mb-3">2.2 Automatically Collected Information</h3>
            <ul className=" pl-6 mb-6">
              <li className="pl-4">2.2.1&nbsp;&nbsp;&nbsp;&nbsp;Device Info: Model, OS, unique identifiers.</li>
              <li className="pl-4">2.2.2&nbsp;&nbsp;&nbsp;&nbsp;Usage Data: Crash logs, performance metrics, and diagnostics.</li>
              <li className="pl-4">2.2.3&nbsp;&nbsp;&nbsp;&nbsp;Location Data (optional): Used for location-tagged activities if enabled.</li>
            </ul>
          </section>

          {/* Section 3: How We Use Your Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              3. How We Use Your Data
            </h2>
            <ul className=" pl-6 space-y-2">
              <li className="pl-4">3.1&nbsp;&nbsp;&nbsp;&nbsp;Deliver inventory tracking and management features.</li>
              <li className="pl-4">3.2&nbsp;&nbsp;&nbsp;&nbsp;Sync data across devices securely.</li>
              <li className="pl-4">3.3&nbsp;&nbsp;&nbsp;&nbsp;Improve user experience and App performance.</li>
              <li className="pl-4">3.4&nbsp;&nbsp;&nbsp;&nbsp;Provide customer support and maintenance.</li>
              <li className="pl-4">3.5&nbsp;&nbsp;&nbsp;&nbsp;Detect fraud and prevent misuse.</li>
            </ul>
          </section>

          {/* Section 4: Sharing Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              4. Sharing Your Information
            </h2>
            <ul className=" pl-6 space-y-2">
              <li className="pl-4">4.1&nbsp;&nbsp;&nbsp;&nbsp;Trusted service providers (e.g., AWS, analytics tools) under confidentiality agreements.</li>
              <li className="pl-4">4.2&nbsp;&nbsp;&nbsp;&nbsp;Authorities, if required for legal compliance or law enforcement.</li>
              <li className="pl-4">4.3&nbsp;&nbsp;&nbsp;&nbsp;Internal teams for technical support, auditing, or feature improvement.</li>
            </ul>
            <p className="mt-4">
              We do not sell or rent your information.
            </p>
          </section>

          {/* Section 5: Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              5. Data Security
            </h2>
            <p>
              We use industry-standard encryption, HTTPS, and secure cloud services to protect your data. However, no digital platform is 100% secure, so we advise safeguarding your credentials.
            </p>
          </section>

          {/* Section 6: Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              6. Data Retention
            </h2>
            <ul className=" pl-6 space-y-2">
              <li className="pl-4">6.1&nbsp;&nbsp;&nbsp;&nbsp;Your data is retained while your account is active.</li>
              <li className="pl-4">6.2&nbsp;&nbsp;&nbsp;&nbsp;Access is revoked immediately upon account deletion.</li>
              <li className="pl-4">6.3&nbsp;&nbsp;&nbsp;&nbsp;Data is purged from our servers within 30 days unless required otherwise by law.</li>
            </ul>
          </section>

          {/* Section 7: Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              7. Your Rights
            </h2>
            <ul className=" pl-6 space-y-2">
              <li className="pl-4">7.1&nbsp;&nbsp;&nbsp;&nbsp;View, correct, or delete your data.</li>
              <li className="pl-4">7.2&nbsp;&nbsp;&nbsp;&nbsp;Withdraw consent at any time.</li>
              <li className="pl-4">7.3&nbsp;&nbsp;&nbsp;&nbsp;Disable optional permissions (like location tracking).</li>
            </ul>
            <p className="mt-4">
              Email us at <a href="mailto:support@accurack.com" className="text-[var(--primary-color)] underline">support@accurack.com</a> for any request.
            </p>
          </section>

          {/* Section 8: Children’s Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              8. Children’s Privacy
            </h2>
            <p>
              Accurack is intended for professional/business use and not for children under 13. We do not knowingly collect data from minors.
            </p>
          </section>

          {/* Section 9: Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this policy. You will be notified via the App or email. Continued use after updates means you agree to the changes.
            </p>
          </section>

          {/* Section 10: Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-6 border-b-2 border-[var(--primary-color)] pb-2">
              10. Contact Us
            </h2>
            <p>Accurack Support Team</p>
            <p>Email: <a href="mailto:support@accurack.ai" className="text-[var(--primary-color)] underline">support@accurack.ai</a></p>
            <p>Website: <a href="https://www.accurack.ai" className="text-[var(--primary-color)] underline">www.accurack.ai</a></p>
          </section>
        </main>
      </div>
      <Footer/>
    </div>
    </>   
  );
};

export default PrivacyPolicy;
