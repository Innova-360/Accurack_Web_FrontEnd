import React from 'react';
import { FiUsers, FiTrendingUp, FiDollarSign, FiTarget, FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 dashboard-card group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{value}</p>
          <div className="flex items-center">
            <div className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
              changeType === 'increase'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {changeType === 'increase' ? (
                <FiArrowUp className="mr-1" size={12} />
              ) : (
                <FiArrowDown className="mr-1" size={12} />
              )}
              {change}
            </div>
            <span className="text-xs text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
        <div className={`p-3 sm:p-4 rounded-xl ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>
            {changeType === 'increase' ? '↗' : '↘'}
            {Math.abs(parseFloat(change.replace('%', '')))}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ${
              changeType === 'increase'
                ? 'bg-gradient-to-r from-green-400 to-green-500'
                : 'bg-gradient-to-r from-red-400 to-red-500'
            }`}
            style={{
              width: `${Math.min(Math.abs(parseFloat(change.replace('%', ''))), 100)}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

const StatsCards: React.FC = () => {
  const stats = [
    {
      title: 'Total Leads',
      value: '2,847',
      change: '+12.5%',
      changeType: 'increase' as const,
      icon: <FiUsers className="text-white" size={24} />,
      color: 'bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-primary)]'
    },
    {
      title: 'Conversion Rate',
      value: '24.8%',
      change: '+3.2%',
      changeType: 'increase' as const,
      icon: <FiTarget className="text-white" size={24} />,
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600'
    },
    {
      title: 'Revenue Generated',
      value: '$89,247',
      change: '+18.7%',
      changeType: 'increase' as const,
      icon: <FiDollarSign className="text-white" size={24} />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Lead Quality Score',
      value: '8.4/10',
      change: '-0.3%',
      changeType: 'decrease' as const,
      icon: <FiTrendingUp className="text-white" size={24} />,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeType={stat.changeType}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default StatsCards;
