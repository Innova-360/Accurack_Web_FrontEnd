import React from 'react';
import { FiMoreVertical, FiMail, FiPhone, FiEye } from 'react-icons/fi';

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
  score: number;
  date: string;
}

const RecentLeads: React.FC = () => {
  const leads: Lead[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.j@techcorp.com',
      company: 'TechCorp Inc.',
      source: 'Website',
      status: 'new',
      score: 85,
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'm.chen@innovate.io',
      company: 'Innovate Solutions',
      source: 'LinkedIn',
      status: 'contacted',
      score: 92,
      date: '2024-01-14'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily@startup.co',
      company: 'StartupCo',
      source: 'Referral',
      status: 'qualified',
      score: 78,
      date: '2024-01-14'
    },
    {
      id: '4',
      name: 'David Kim',
      email: 'david.kim@enterprise.com',
      company: 'Enterprise Ltd.',
      source: 'Google Ads',
      status: 'new',
      score: 88,
      date: '2024-01-13'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      email: 'lisa@growth.agency',
      company: 'Growth Agency',
      source: 'Website',
      status: 'converted',
      score: 95,
      date: '2024-01-12'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'qualified':
        return 'bg-purple-100 text-purple-800';
      case 'converted':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-blue-600 bg-blue-50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 dashboard-card">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Recent Leads</h3>
          <p className="text-sm text-gray-500">Latest lead activities and updates</p>
        </div>
        <button className="text-[var(--primary-color)] text-sm font-medium hover:text-[var(--dark-primary)] transition-colors self-start sm:self-auto">
          View All
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Lead
              </th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Source
              </th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Score
              </th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-primary)] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.company}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className="text-sm text-gray-600">{lead.source}</span>
                </td>
                <td className="py-4 px-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md ${getScoreColor(lead.score)}`}>
                    {lead.score}
                  </span>
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-gray-400 hover:text-[var(--primary-color)] hover:bg-gray-100 rounded">
                      <FiEye size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-[var(--primary-color)] hover:bg-gray-100 rounded">
                      <FiMail size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-[var(--primary-color)] hover:bg-gray-100 rounded">
                      <FiPhone size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                      <FiMoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-primary)] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{lead.name}</p>
                  <p className="text-sm text-gray-500">{lead.company}</p>
                </div>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getScoreColor(lead.score)}`}>
                {lead.score}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Source</p>
                <p className="text-sm font-medium text-gray-900">{lead.source}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Status</p>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">{lead.date}</p>
              <div className="flex items-center gap-2">
                <button className="p-1.5 text-gray-400 hover:text-[var(--primary-color)] hover:bg-white rounded transition-colors">
                  <FiEye size={16} />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-[var(--primary-color)] hover:bg-white rounded transition-colors">
                  <FiMail size={16} />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-[var(--primary-color)] hover:bg-white rounded transition-colors">
                  <FiPhone size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentLeads;
