import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSupabaseData } from '../../hooks/useSupabaseData';
import SEOManager from './SEOManager';
import ContentManager from './ContentManager';
import CodeInjectionManager from './CodeInjectionManager';
import { 
  BarChart3, 
  Users, 
  Mail, 
  Settings, 
  LogOut, 
  FileText,
  TrendingUp,
  Clock,
  Search,
  Filter,
  Download,
  Trash2,
  Eye,
  Edit,
  Save,
  X,
  Globe,
  Image,
  Code,
  Palette,
  Shield,
  Briefcase
} from 'lucide-react';

interface AdminDashboardProps {
  user: any;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const { forms, newsletter, stats, updateFormStatus, deleteForm, deleteSubscriber, loading } = useSupabaseData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || form.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'forms', name: 'Form Submissions', icon: <FileText className="h-5 w-5" /> },
    { id: 'newsletter', name: 'Newsletter', icon: <Mail className="h-5 w-5" /> },
    { id: 'blog', name: 'Blog Posts', icon: <Edit className="h-5 w-5" /> },
    { id: 'content', name: 'Content Management', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'seo', name: 'SEO Settings', icon: <Settings className="h-5 w-5" /> },
    { id: 'code', name: 'Code Injection', icon: <Code className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">TapDev Admin</h1>
              <p className="text-gray-400 text-sm">Welcome back, {user.username}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-800 min-h-screen p-6">
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Forms</p>
                      <p className="text-3xl font-bold text-white">{stats.totalForms}</p>
                    </div>
                    <FileText className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">New Forms</p>
                      <p className="text-3xl font-bold text-white">{stats.newForms}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Subscribers</p>
                      <p className="text-3xl font-bold text-white">{stats.totalSubscribers}</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Blog Posts</p>
                      <p className="text-3xl font-bold text-white">{stats.blogPosts?.length || 0}</p>
                    </div>
                    <Edit className="h-8 w-8 text-indigo-500" />
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">This Month</p>
                      <p className="text-3xl font-bold text-white">+{stats.monthlyGrowth.forms + stats.monthlyGrowth.subscribers}</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Recent Form Submissions</h3>
                  <div className="space-y-4">
                    {stats.recentForms.length > 0 ? stats.recentForms.map((form) => (
                      <div key={form.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div>
                          <p className="font-medium">{form.name}</p>
                          <p className="text-gray-400 text-sm">{form.email}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          form.status === 'new' ? 'bg-green-600 text-white' :
                          form.status === 'contacted' ? 'bg-blue-600 text-white' :
                          'bg-gray-600 text-white'
                        }`}>
                          {form.status}
                        </span>
                      </div>
                    )) : (
                      <div className="text-center py-8 text-gray-400">
                        <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p>No form submissions yet</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Recent Subscribers</h3>
                  <div className="space-y-4">
                    {stats.recentSubscribers.length > 0 ? stats.recentSubscribers.map((subscriber) => (
                      <div key={subscriber.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div>
                          <p className="font-medium">{subscriber.email}</p>
                          <p className="text-gray-400 text-sm">
                            {new Date(subscriber.subscribedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-green-600 text-white rounded-full text-xs">
                          Active
                        </span>
                      </div>
                    )) : (
                      <div className="text-center py-8 text-gray-400">
                        <Mail className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p>No newsletter subscribers yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'forms' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Form Submissions</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search forms..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Budget
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {filteredForms.map((form) => (
                        <tr key={form.id} className="hover:bg-gray-700">
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-sm font-medium text-white">{form.name}</div>
                              <div className="text-sm text-gray-400">{form.email}</div>
                              {form.company && (
                                <div className="text-sm text-gray-500">{form.company}</div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {form.service || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {form.budget || 'Not specified'}
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={form.status}
                              onChange={(e) => updateFormStatus(form.id, e.target.value)}
                              className={`px-2 py-1 rounded-full text-xs font-medium border-0 ${
                                form.status === 'new' ? 'bg-green-600 text-white' :
                                form.status === 'contacted' ? 'bg-blue-600 text-white' :
                                'bg-gray-600 text-white'
                              }`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {new Date(form.submittedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => alert(`Message: ${form.message}`)}
                                className="p-1 text-blue-400 hover:text-blue-300"
                                title="View message"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm('Are you sure you want to delete this form submission?')) {
                                    deleteForm(form.id);
                                  }
                                }}
                                className="p-1 text-red-400 hover:text-red-300"
                                title="Delete form"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredForms.length === 0 && (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                            <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                            <p>No form submissions found</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'newsletter' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Newsletter Subscribers</h2>
                <div className="text-sm text-gray-400">
                  Total: {newsletter.length} subscribers
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Subscribed Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {newsletter.map((subscriber) => (
                        <tr key={subscriber.id} className="hover:bg-gray-700">
                          <td className="px-6 py-4 text-sm font-medium text-white">
                            {subscriber.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {new Date(subscriber.subscribedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                              {subscriber.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => {
                                if (confirm('Are you sure you want to delete this subscriber?')) {
                                  deleteSubscriber(subscriber.id);
                                }
                              }}
                              className="p-1 text-red-400 hover:text-red-300"
                              title="Delete subscriber"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {newsletter.length === 0 && (
                        <tr>
                          <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                            <Mail className="h-8 w-8 mx-auto mb-2 opacity-50" />
                            <p>No newsletter subscribers found</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'blog' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Blog Posts</h2>
                <div className="flex items-center space-x-4">
                  <Link
                    to="/blog-management"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                  >
                    <Edit className="h-4 w-4" />
                    <span>Manage Blog</span>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="p-6">
                  {stats.blogPosts && stats.blogPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {stats.blogPosts.slice(0, 6).map((post: any) => (
                        <div key={post.id} className="bg-gray-700 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              post.status === 'published' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'
                            }`}>
                              {post.status}
                            </span>
                            <span className="text-gray-400 text-xs">
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="font-medium text-white mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-gray-500 text-xs">{post.author}</span>
                            <span className="text-blue-400 text-xs">{post.category}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-400">
                      <Edit className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg mb-2">No blog posts yet</p>
                      <p className="text-sm mb-4">Create your first blog post to get started</p>
                      <Link
                        to="/blog-management"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 text-white"
                      >
                        <Edit className="h-4 w-4" />
                        <span>Create Blog Post</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'seo' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SEOManager />
            </motion.div>
          )}

          {activeTab === 'content' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContentManager />
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CodeInjectionManager />
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;