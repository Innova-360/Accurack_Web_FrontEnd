import React from 'react';
import { FiMoreVertical, FiTrendingUp } from 'react-icons/fi';

interface FunnelStage {
  name: string;
  count: number;
  percentage: number;
  conversionRate?: number;
  color: string;
}

const ConversionFunnel: React.FC = () => {
  const funnelStages: FunnelStage[] = [
    {
      name: 'Visitors',
      count: 12450,
      percentage: 100,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Leads',
      count: 2847,
      percentage: 22.9,
      conversionRate: 22.9,
      color: 'from-[var(--primary-color)] to-[var(--dark-primary)]'
    },
    {
      name: 'Qualified Leads',
      count: 1423,
      percentage: 11.4,
      conversionRate: 50.0,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Opportunities',
      count: 567,
      percentage: 4.6,
      conversionRate: 39.8,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Customers',
      count: 142,
      percentage: 1.1,
      conversionRate: 25.0,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Conversion Funnel</h3>
          <p className="text-sm text-gray-500">Lead to customer conversion journey</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
          <FiMoreVertical size={20} />
        </button>
      </div>

      {/* Funnel Visualization */}
      <div className="space-y-3 mb-6">
        {funnelStages.map((stage, index) => {
          const width = Math.max(stage.percentage, 10); // Minimum width for visibility
          
          return (
            <div key={index} className="relative">
              {/* Stage Bar */}
              <div className="flex items-center gap-4">
                <div className="w-32 text-right">
                  <span className="text-sm font-medium text-gray-900">{stage.name}</span>
                </div>
                <div className="flex-1 relative">
                  <div
                    className={`h-12 bg-gradient-to-r ${stage.color} rounded-lg flex items-center justify-between px-4 text-white transition-all duration-300 hover:shadow-md`}
                    style={{ width: `${width}%` }}
                  >
                    <span className="font-semibold">{stage.count.toLocaleString()}</span>
                    <span className="text-sm opacity-90">{stage.percentage}%</span>
                  </div>
                  
                  {/* Conversion Rate Arrow */}
                  {stage.conversionRate && index > 0 && (
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                      <div className="bg-white border border-gray-200 rounded-md px-2 py-1 shadow-sm">
                        <span className="text-xs font-medium text-gray-700">
                          {stage.conversionRate}%
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Connection Line */}
              {index < funnelStages.length - 1 && (
                <div className="flex justify-center mt-2 mb-1">
                  <div className="w-px h-4 bg-gray-300"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <FiTrendingUp className="text-green-500" size={16} />
            <span className="text-lg font-bold text-gray-900">1.1%</span>
          </div>
          <p className="text-xs text-gray-500">Overall Conversion</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-lg font-bold text-[var(--primary-color)]">$628</span>
          </div>
          <p className="text-xs text-gray-500">Avg. Customer Value</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-lg font-bold text-purple-600">18 days</span>
          </div>
          <p className="text-xs text-gray-500">Avg. Conversion Time</p>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <p className="text-sm font-medium text-blue-900 mb-1">Optimization Opportunity</p>
            <p className="text-xs text-blue-700">
              Improving the Qualified Lead to Opportunity conversion rate by 10% could increase customers by 28%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionFunnel;
