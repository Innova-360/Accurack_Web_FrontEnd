import React from 'react';
import { FiGlobe, FiLinkedin, FiMail, FiSearch, FiUsers, FiMoreVertical } from 'react-icons/fi';

interface LeadSource {
  name: string;
  count: number;
  percentage: number;
  icon: React.ReactNode;
  color: string;
  change: string;
}

const LeadSources: React.FC = () => {
  const sources: LeadSource[] = [
    {
      name: 'Website',
      count: 1247,
      percentage: 43.8,
      icon: <FiGlobe size={20} />,
      color: 'from-[var(--primary-color)] to-[var(--dark-primary)]',
      change: '+12.5%'
    },
    {
      name: 'LinkedIn',
      count: 856,
      percentage: 30.1,
      icon: <FiLinkedin size={20} />,
      color: 'from-blue-500 to-blue-600',
      change: '+8.3%'
    },
    {
      name: 'Google Ads',
      count: 423,
      percentage: 14.9,
      icon: <FiSearch size={20} />,
      color: 'from-green-500 to-green-600',
      change: '+15.7%'
    },
    {
      name: 'Email Campaign',
      count: 198,
      percentage: 7.0,
      icon: <FiMail size={20} />,
      color: 'from-purple-500 to-purple-600',
      change: '+5.2%'
    },
    {
      name: 'Referrals',
      count: 123,
      percentage: 4.3,
      icon: <FiUsers size={20} />,
      color: 'from-orange-500 to-orange-600',
      change: '+22.1%'
    }
  ];

  const totalLeads = sources.reduce((sum, source) => sum + source.count, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 dashboard-card">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Lead Sources</h3>
          <p className="text-sm text-gray-500">Distribution of lead generation channels</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-[var(--primary-color)] hover:bg-gray-100 rounded-lg transition-colors self-start sm:self-auto">
          <FiMoreVertical size={20} />
        </button>
      </div>

      {/* Enhanced Donut Chart Visualization */}
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
          {/* Multi-layered donut chart */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            {sources.map((source, index) => {
              const radius = 80;
              const strokeWidth = 12;
              const circumference = 2 * Math.PI * radius;
              const strokeDasharray = `${(source.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -sources.slice(0, index).reduce((acc, s) => acc + (s.percentage / 100) * circumference, 0);

              return (
                <circle
                  key={index}
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-500 hover:stroke-[14]"
                />
              );
            })}

            {/* Gradients */}
            <defs>
              {sources.map((source, index) => (
                <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={source.color.includes('primary') ? '#117D90' :
                    source.color.includes('blue') ? '#3B82F6' :
                    source.color.includes('green') ? '#10B981' :
                    source.color.includes('purple') ? '#8B5CF6' : '#F59E0B'} />
                  <stop offset="100%" stopColor={source.color.includes('primary') ? '#03414C' :
                    source.color.includes('blue') ? '#1D4ED8' :
                    source.color.includes('green') ? '#059669' :
                    source.color.includes('purple') ? '#7C3AED' : '#D97706'} />
                </linearGradient>
              ))}
            </defs>
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">{totalLeads.toLocaleString()}</span>
            <span className="text-sm text-gray-500 font-medium">Total Leads</span>
            <span className="text-xs text-green-600 font-semibold mt-1">+12.8% ↗</span>
          </div>
        </div>

        {/* Legend for larger screens */}
        <div className="hidden lg:flex flex-col gap-3">
          {sources.slice(0, 3).map((source, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${source.color} shadow-sm`}></div>
              <div>
                <div className="text-sm font-medium text-gray-900">{source.name}</div>
                <div className="text-xs text-gray-500">{source.percentage}% • {source.count.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sources List */}
      <div className="space-y-3">
        {sources.map((source, index) => (
          <div key={index} className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${source.color} text-white shadow-md group-hover:scale-110 transition-transform duration-200`}>
                  {source.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">{source.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-700">{source.count.toLocaleString()}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        parseFloat(source.change.replace('%', '')) > 0
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {source.change}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${source.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600 min-w-[3rem]">{source.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--primary-color)]">5</p>
            <p className="text-xs text-gray-500">Active Channels</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">+12.8%</p>
            <p className="text-xs text-gray-500">Overall Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSources;
