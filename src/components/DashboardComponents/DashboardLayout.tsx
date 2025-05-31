import React, { useState } from 'react';
import Sidebar from './asidebar';
import TopBar from './TopBar';
import StatsCards from './StatsCards';
import LeadsChart from './LeadsChart';
import RecentLeads from './RecentLeads';
import LeadSources from './LeadSources';
import ConversionFunnel from './ConversionFunnel';
import ActivityFeed from './ActivityFeed';

const DashboardLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Stats Cards */}
            <StatsCards />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              {/* Left Column - Takes 2 columns on xl screens */}
              <div className="xl:col-span-2 space-y-4 sm:space-y-6">
                <LeadsChart />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <ConversionFunnel />
                  <div className="lg:hidden xl:block">
                    <LeadSources />
                  </div>
                </div>
              </div>

              {/* Right Column - Takes 1 column on xl screens */}
              <div className="space-y-4 sm:space-y-6">
                <div className="hidden lg:block xl:hidden">
                  <LeadSources />
                </div>
                <ActivityFeed />
              </div>
            </div>

            {/* Recent Leads Table */}
            <RecentLeads />
          </div>
        );
      
      case 'leads':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Leads Management</h2>
              <p className="text-gray-600">Detailed leads management interface would be implemented here.</p>
            </div>
            <RecentLeads />
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LeadsChart />
              <ConversionFunnel />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LeadSources />
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600">Advanced analytics dashboard would be implemented here.</p>
              </div>
            </div>
          </div>
        );
      
      case 'campaigns':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Campaign Management</h2>
              <p className="text-gray-600">Campaign creation and management interface would be implemented here.</p>
            </div>
            <LeadSources />
          </div>
        );
      
      case 'performance':
        return (
          <div className="space-y-6">
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LeadsChart />
              <ConversionFunnel />
            </div>
          </div>
        );
      
      default:
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Top Bar */}
      <TopBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isCollapsed={isCollapsed}
      />

      {/* Main Content */}
      <main className={`pt-16 p-3 sm:p-4 lg:p-6 transition-all duration-300 ${
        isCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {activeTab === 'overview' ? 'Dashboard Overview' :
               activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              {activeTab === 'overview' ? 'Welcome back! Here\'s what\'s happening with your leads today.' :
               `Manage your ${activeTab} and track performance metrics.`}
            </p>
          </div>

          {/* Dynamic Content */}
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
