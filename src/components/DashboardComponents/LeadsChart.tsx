import React, { useState } from 'react';
import { FiTrendingUp, FiMoreVertical, FiCalendar, FiDownload } from 'react-icons/fi';

const LeadsChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6M');

  // Mock data for the chart
  const chartData = [
    { month: 'Jan', leads: 120, conversions: 28, shortMonth: 'J' },
    { month: 'Feb', leads: 180, conversions: 45, shortMonth: 'F' },
    { month: 'Mar', leads: 240, conversions: 62, shortMonth: 'M' },
    { month: 'Apr', leads: 200, conversions: 48, shortMonth: 'A' },
    { month: 'May', leads: 280, conversions: 72, shortMonth: 'M' },
    { month: 'Jun', leads: 320, conversions: 85, shortMonth: 'J' },
  ];

  const maxValue = Math.max(...chartData.map(d => Math.max(d.leads, d.conversions)));
  const periods = ['1M', '3M', '6M', '1Y'];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 dashboard-card">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Lead Generation Trends</h3>
          <p className="text-sm text-gray-500">Monthly leads and conversion overview</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Period Selector */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  selectedPeriod === period
                    ? 'bg-[var(--primary-color)] text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
          <button className="p-2 text-gray-400 hover:text-[var(--primary-color)] hover:bg-gray-100 rounded-lg transition-colors">
            <FiDownload size={18} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <FiMoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-64 sm:h-72">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-2">
          <span>{maxValue}</span>
          <span>{Math.round(maxValue * 0.75)}</span>
          <span>{Math.round(maxValue * 0.5)}</span>
          <span>{Math.round(maxValue * 0.25)}</span>
          <span>0</span>
        </div>

        {/* Grid lines */}
        <div className="absolute left-8 right-0 top-0 h-full">
          {[0, 25, 50, 75, 100].map((percentage) => (
            <div
              key={percentage}
              className="absolute w-full border-t border-gray-100"
              style={{ top: `${100 - percentage}%` }}
            />
          ))}
        </div>

        <div className="flex items-end justify-between h-full gap-2 sm:gap-4 ml-8">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1 group">
              {/* Bars Container */}
              <div className="flex items-end gap-1 mb-3 h-48 sm:h-56">
                {/* Leads Bar */}
                <div className="relative">
                  <div
                    className="bg-gradient-to-t from-[var(--primary-color)] to-[var(--primary-color)]/70 rounded-t-lg w-4 sm:w-6 transition-all duration-500 hover:shadow-lg chart-bar group-hover:scale-105"
                    style={{
                      height: `${(data.leads / maxValue) * 100}%`,
                      minHeight: '4px'
                    }}
                  />
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-10">
                    <div className="text-center">
                      <div className="font-semibold">{data.leads} leads</div>
                      <div className="text-gray-300">{data.month}</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>

                {/* Conversions Bar */}
                <div className="relative">
                  <div
                    className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg w-4 sm:w-6 transition-all duration-500 hover:shadow-lg chart-bar group-hover:scale-105"
                    style={{
                      height: `${(data.conversions / maxValue) * 100}%`,
                      minHeight: '4px'
                    }}
                  />
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-10">
                    <div className="text-center">
                      <div className="font-semibold">{data.conversions} conversions</div>
                      <div className="text-gray-300">{data.month}</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>

              {/* Month Label */}
              <span className="text-xs text-gray-500 font-medium hidden sm:block">{data.month}</span>
              <span className="text-xs text-gray-500 font-medium sm:hidden">{data.shortMonth}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)]/70 rounded-md shadow-sm"></div>
          <span className="text-sm font-medium text-gray-700">Total Leads</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-md shadow-sm"></div>
          <span className="text-sm font-medium text-gray-700">Conversions</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t border-gray-100">
        <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <FiTrendingUp className="text-green-600" size={18} />
            <span className="text-lg font-bold text-green-600">+23.5%</span>
          </div>
          <p className="text-xs text-gray-600 font-medium">Lead Growth</p>
        </div>
        <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <FiTrendingUp className="text-blue-600" size={18} />
            <span className="text-lg font-bold text-blue-600">+18.2%</span>
          </div>
          <p className="text-xs text-gray-600 font-medium">Conversion Growth</p>
        </div>
        <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-lg font-bold text-purple-600">26.6%</span>
          </div>
          <p className="text-xs text-gray-600 font-medium">Avg. Conv. Rate</p>
        </div>
        <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-lg font-bold text-orange-600">1,340</span>
          </div>
          <p className="text-xs text-gray-600 font-medium">Total This Period</p>
        </div>
      </div>
    </div>
  );
};

export default LeadsChart;
