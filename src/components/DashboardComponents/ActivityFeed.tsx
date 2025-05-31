import React from 'react';
import { FiUser, FiMail, FiPhone, FiCalendar, FiDollarSign, FiTarget, FiMoreVertical } from 'react-icons/fi';

interface Activity {
  id: string;
  type: 'lead_created' | 'email_sent' | 'call_made' | 'meeting_scheduled' | 'deal_closed' | 'campaign_launched';
  title: string;
  description: string;
  user: string;
  timestamp: string;
  icon: React.ReactNode;
  color: string;
}

const ActivityFeed: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'lead_created',
      title: 'New lead generated',
      description: 'Sarah Johnson from TechCorp Inc. submitted contact form',
      user: 'System',
      timestamp: '2 minutes ago',
      icon: <FiUser size={16} />,
      color: 'bg-blue-500'
    },
    {
      id: '2',
      type: 'email_sent',
      title: 'Email campaign sent',
      description: 'Welcome series email sent to 247 new subscribers',
      user: 'Marketing Team',
      timestamp: '15 minutes ago',
      icon: <FiMail size={16} />,
      color: 'bg-green-500'
    },
    {
      id: '3',
      type: 'call_made',
      title: 'Follow-up call completed',
      description: 'Called Michael Chen - Interested in enterprise plan',
      user: 'John Smith',
      timestamp: '1 hour ago',
      icon: <FiPhone size={16} />,
      color: 'bg-purple-500'
    },
    {
      id: '4',
      type: 'meeting_scheduled',
      title: 'Demo meeting scheduled',
      description: 'Product demo with Emily Rodriguez for tomorrow 2 PM',
      user: 'Sales Team',
      timestamp: '2 hours ago',
      icon: <FiCalendar size={16} />,
      color: 'bg-orange-500'
    },
    {
      id: '5',
      type: 'deal_closed',
      title: 'Deal closed successfully',
      description: 'Lisa Thompson converted - $2,400 annual subscription',
      user: 'David Wilson',
      timestamp: '3 hours ago',
      icon: <FiDollarSign size={16} />,
      color: 'bg-green-600'
    },
    {
      id: '6',
      type: 'campaign_launched',
      title: 'New campaign launched',
      description: 'LinkedIn outreach campaign targeting SaaS companies',
      user: 'Marketing Team',
      timestamp: '5 hours ago',
      icon: <FiTarget size={16} />,
      color: 'bg-[var(--primary-color)]'
    },
    {
      id: '7',
      type: 'lead_created',
      title: 'Qualified lead identified',
      description: 'Robert Kim scored 92/100 - High priority follow-up needed',
      user: 'AI System',
      timestamp: '6 hours ago',
      icon: <FiUser size={16} />,
      color: 'bg-blue-500'
    }
  ];

  const getActivityIcon = (activity: Activity) => {
    return (
      <div className={`w-8 h-8 ${activity.color} rounded-full flex items-center justify-center text-white`}>
        {activity.icon}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Activity Feed</h3>
          <p className="text-sm text-gray-500">Recent activities and updates</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
          <FiMoreVertical size={20} />
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{activity.user}</span>
                    <span>•</span>
                    <span>{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Line */}
            {index < activities.length - 1 && (
              <div className="absolute left-[2.75rem] mt-10 w-px h-6 bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 text-center">
        <button className="text-[var(--primary-color)] text-sm font-medium hover:text-[var(--dark-primary)] transition-colors">
          View All Activities
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;
