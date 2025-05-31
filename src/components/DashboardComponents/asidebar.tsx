import React from 'react';
import { FiHome, FiUsers, FiBarChart, FiTarget, FiSettings, FiTrendingUp, FiMail, FiPhone, FiCalendar, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isCollapsed?: boolean;
  setIsCollapsed?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
  isCollapsed = false,
  setIsCollapsed
}) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: FiHome },
    { id: 'leads', label: 'Leads', icon: FiUsers },
    { id: 'analytics', label: 'Analytics', icon: FiBarChart },
    { id: 'campaigns', label: 'Campaigns', icon: FiTarget },
    { id: 'performance', label: 'Performance', icon: FiTrendingUp },
    { id: 'contacts', label: 'Contacts', icon: FiMail },
    { id: 'calls', label: 'Calls', icon: FiPhone },
    { id: 'calendar', label: 'Calendar', icon: FiCalendar },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  const handleMenuClick = (tabId: string) => {
    setActiveTab(tabId);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const toggleCollapse = () => {
    if (setIsCollapsed) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className={`bg-white h-screen shadow-xl border-r border-gray-200 fixed left-0 top-0 z-50 transform transition-all duration-300 ease-in-out ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    } ${isCollapsed ? 'lg:w-16' : 'lg:w-64'} w-64`}>

      {/* Toggle Button - Desktop Only */}
      <button
        onClick={toggleCollapse}
        className="hidden lg:flex absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-300 rounded-full items-center justify-center text-gray-600 hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-200 shadow-md z-10"
      >
        {isCollapsed ? <FiChevronRight size={14} /> : <FiChevronLeft size={14} />}
      </button>

      {/* Mobile Header with Close Button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-primary)] rounded-lg flex items-center justify-center">
            <img src="/logo.svg" className="w-5 h-5" alt="logo" />
          </div>
          <div>
            <img src="/logoName.svg" className="w-[93px] h-[33px]" alt="Accurack" />
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="w-10 h-10 bg-white hover:bg-red-50 border border-gray-300 hover:border-red-300 rounded-lg flex items-center justify-center text-gray-600 hover:text-red-600 transition-all duration-200 shadow-sm hover:shadow-md mobile-close-btn"
          aria-label="Close sidebar"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Desktop Logo */}
      <div className={`hidden lg:flex items-center gap-3 p-6 border-b border-gray-200 transition-all duration-300 ${
        isCollapsed ? 'lg:justify-center lg:px-2' : ''
      }`}>
        <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
          <img src="/logo.svg" className="w-5 h-5" alt="logo" />
        </div>
        <div className={`transition-all duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}>
          <img src="/logoName.svg" className="w-[93px] h-[33px]" alt="Accurack" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleMenuClick(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[var(--primary-color)]/10 to-transparent border-r-3 border-[var(--primary-color)] text-[var(--primary-color)]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[var(--primary-color)]'
                } ${isCollapsed ? 'lg:justify-center lg:px-4' : ''}`}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className={`font-medium transition-all duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}>
                  {item.label}
                </span>
              </button>

              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                  {item.label}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className={`absolute bottom-6 transition-all duration-300 ${
        isCollapsed ? 'lg:left-2 lg:right-2' : 'left-6 right-6'
      }`}>
        <div className={`bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-primary)] rounded-lg p-4 text-white transition-all duration-300 ${
          isCollapsed ? 'lg:p-2' : ''
        }`}>
          <div className={`transition-all duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}>
            <h3 className="font-semibold text-sm mb-1">Upgrade to Pro</h3>
            <p className="text-xs opacity-90 mb-3">Get advanced analytics and unlimited leads</p>
            <button className="bg-white text-[var(--primary-color)] text-xs font-semibold px-3 py-1.5 rounded-md w-full hover:bg-gray-100 transition-colors">
              Upgrade Now
            </button>
          </div>
          {/* Collapsed state - just icon */}
          <div className={`transition-all duration-300 ${isCollapsed ? 'lg:block' : 'lg:hidden'} hidden text-center`}>
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white text-xs font-bold">↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;