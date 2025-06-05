import { useState } from 'react';
import Header from "./../components/LandingPageComponents/Header";
import Hero from "./../components/LandingPageComponents/Hero";
import Tagline from "../components/LandingPageComponents/Tagline";
import Cashflow from "../components/LandingPageComponents/Cashflow";
import InventoryForcasting from '../components/LandingPageComponents/InventoryForcasting';
import SeamlessIntegration from '../components/LandingPageComponents/SeamlessIntegration';
import Automated from '../components/LandingPageComponents/Automated';
import FinancialReporting from '../components/LandingPageComponents/FinancialReporting';
import Payroll from "../components/LandingPageComponents/Payroll";
import LogoMarquee from "../components/LandingPageComponents/LogoMarquee";
import BusinessGrowth from "../components/LandingPageComponents/BusinessGrowth";
import Enterprise from "../components/LandingPageComponents/Enterprise";
import InventoryManagement from "../components/LandingPageComponents/InventoryManagement";
import Footer from "../components/LandingPageComponents/Footer";
import ChatSupport from '../components/LandingPageComponents/ChatSupport';

function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Header />
      {isChatOpen == false ? (<img
        src="chatIcon.svg"
        alt="chat"
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="cursor-pointer bottom-[3%] fixed right-[3%] z-[999999]"
      />) 
      :
        <ChatSupport setIsChatOpen={setIsChatOpen}/>
      }


      <Hero />
      <Tagline />
      <Cashflow />
      <InventoryForcasting />
      <SeamlessIntegration />
      <Automated />
      <FinancialReporting />
      <Payroll />
      <LogoMarquee />
      <BusinessGrowth />
      <Enterprise />
      <InventoryManagement />
      <Footer />
    </>
  );
}

export default LandingPage;
