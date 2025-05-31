import React from 'react';
import { FiBell, FiSearch, FiUser, FiChevronDown, FiMenu } from 'react-icons/fi';

interface TopBarProps {
  userName?: string;
  userRole?: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isCollapsed?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({
  userName = "Muhammad Ubaid",
  userRole = "Admin",
  sidebarOpen,
  setSidebarOpen,
  isCollapsed = false
}) => {
  return (
    <div className={`bg-white h-16 shadow-sm border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 fixed top-0 right-0 left-0 z-30 transition-all duration-300 ${
      isCollapsed ? 'lg:ml-16' : 'lg:ml-64'
    }`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden p-2 text-gray-600 hover:text-[var(--primary-color)] hover:bg-gray-100 rounded-lg transition-colors"
      >
        <FiMenu size={24} />
      </button>
      {/* Search Bar */}
      <div className="hidden sm:flex items-center flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search leads, campaigns, contacts..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>

      {/* Mobile Search Button */}
      <button className="sm:hidden p-2 text-gray-600 hover:text-[var(--primary-color)] hover:bg-gray-100 rounded-lg transition-colors">
        <FiSearch size={20} />
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <div className="relative">
          <button className="p-2 text-gray-600 hover:text-[var(--primary-color)] hover:bg-gray-100 rounded-lg transition-colors">
            <FiBell size={20} />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            3
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-gray-200">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-primary)] rounded-full flex items-center justify-center shadow-md">
            <FiUser className="text-white" size={16} />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500">{userRole}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <FiChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
