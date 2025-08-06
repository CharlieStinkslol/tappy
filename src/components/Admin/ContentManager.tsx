import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useContentManager } from '../../hooks/useContentManager';
import PortfolioManager from './PortfolioManager';
import ServicePageManager from './ServicePageManager';
import HomePageManager from './HomePageManager';
import { 
  Briefcase, 
  Settings, 
  Home, 
  Plus,
  Edit,
  Eye,
  EyeOff,
  Trash2
} from 'lucide-react';

const ContentManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const { portfolioProjects, servicePages, homePage } = useContentManager();

  const tabs = [
    { id: 'portfolio', name: 'Portfolio', icon: <Briefcase className="h-5 w-5" />, count: portfolioProjects.length },
    { id: 'services', name: 'Service Pages', icon: <Settings className="h-5 w-5" />, count: servicePages.length },
    { id: 'homepage', name: 'Homepage', icon: <Home className="h-5 w-5" />, count: 1 }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Content Management</h2>
        <div className="text-sm text-gray-400">
          Manage all website content from one place
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-800 rounded-xl border border-gray-700">
        <div className="flex border-b border-gray-700 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
              <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'portfolio' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioManager />
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ServicePageManager />
            </motion.div>
          )}

          {activeTab === 'homepage' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePageManager />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentManager;