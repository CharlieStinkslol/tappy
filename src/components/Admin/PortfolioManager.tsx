import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSupabaseData } from '../../hooks/useSupabaseData';
import { PortfolioProject } from '../../lib/supabase';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Save, 
  X,
  Image,
  Tag,
  Clock,
  Star,
  ExternalLink,
  Briefcase
} from 'lucide-react';

const PortfolioManager: React.FC = () => {
  const { portfolioProjects, createPortfolioProject, updatePortfolioProject, deletePortfolioProject } = useSupabaseData();
  const [isEditing, setIsEditing] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState<Partial<PortfolioProject>>({
    title: '',
    category: 'business',
    client: '',
    description: '',
    image: '',
    technologies: [],
    results: {},
    features: [],
    url: '',
    testimonial: '',
    timeline: '',
    enabled: true,
    display_order: 0
  });

  const categories = ['ecommerce', 'business', 'nonprofit', 'healthcare', 'education'];

  const handleEdit = (project: PortfolioProject) => {
    setEditingProject(project);
    setFormData(project);
    setIsEditing(true);
  };

  const handleCreate = () => {
    setFormData({
      title: '',
      category: 'business',
      client: '',
      description: '',
      image: '',
      technologies: [],
      results: {},
      features: [],
      url: '',
      testimonial: '',
      timeline: '',
      enabled: true,
      display_order: portfolioProjects.length + 1
    });
    setIsCreating(true);
  };

  const handleSave = async () => {
    if (isCreating) {
      await createPortfolioProject(formData as Omit<PortfolioProject, 'id' | 'created_at' | 'updated_at'>);
      setIsCreating(false);
    } else if (editingProject) {
      await updatePortfolioProject(editingProject.id, formData);
      setIsEditing(false);
      setEditingProject(null);
    }
    setFormData({});
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsCreating(false);
    setEditingProject(null);
    setFormData({});
  };

  const handleToggleEnabled = async (id: string, enabled: boolean) => {
    await updatePortfolioProject(id, { enabled });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this portfolio project?')) {
      await deletePortfolioProject(id);
    }
  };

  const handleArrayFieldChange = (field: 'technologies' | 'features', value: string) => {
    const array = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({ ...prev, [field]: array }));
  };

  const handleResultsChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      results: { ...prev.results, [key]: value }
    }));
  };

  if (isEditing || isCreating) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">
            {isCreating ? 'Create New Portfolio Project' : 'Edit Portfolio Project'}
          </h3>
          <div className="flex space-x-3">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300"
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-300"
            >
              <X className="h-4 w-4" />
              <span>Cancel</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Title
              </label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Enter project title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                value={formData.category || 'business'}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Client Name
              </label>
              <input
                type="text"
                value={formData.client || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Enter client name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Timeline
              </label>
              <input
                type="text"
                value={formData.timeline || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="e.g., 6 weeks"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter project description"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={formData.technologies?.join(', ') || ''}
                onChange={(e) => handleArrayFieldChange('technologies', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="WordPress, React, PHP"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Features (comma-separated)
              </label>
              <input
                type="text"
                value={formData.features?.join(', ') || ''}
                onChange={(e) => handleArrayFieldChange('features', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Custom Portal, API Integration"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Results (key: value pairs)
            </label>
            <div className="space-y-3">
              {Object.entries(formData.results || {}).map(([key, value], index) => (
                <div key={index} className="flex space-x-3">
                  <input
                    type="text"
                    value={key}
                    onChange={(e) => {
                      const newResults = { ...formData.results };
                      delete newResults[key];
                      newResults[e.target.value] = value;
                      setFormData(prev => ({ ...prev, results: newResults }));
                    }}
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Result type"
                  />
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleResultsChange(key, e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Result value"
                  />
                  <button
                    onClick={() => {
                      const newResults = { ...formData.results };
                      delete newResults[key];
                      setFormData(prev => ({ ...prev, results: newResults }));
                    }}
                    className="p-2 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleResultsChange('New Result', '')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                <Plus className="h-4 w-4" />
                <span>Add Result</span>
              </button>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Client Testimonial
            </label>
            <textarea
              value={formData.testimonial || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, testimonial: e.target.value }))}
              rows={3}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter client testimonial"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project URL
              </label>
              <input
                type="url"
                value={formData.url || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image Reference
              </label>
              <input
                type="text"
                value={formData.image || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="project-image-name"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.enabled || false}
                onChange={(e) => setFormData(prev => ({ ...prev, enabled: e.target.checked }))}
                className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-300">Enable this project</span>
            </label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Portfolio Projects</h3>
        <button
          onClick={handleCreate}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
        >
          <Plus className="h-4 w-4" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ${
              !project.enabled ? 'opacity-50' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="font-bold text-white mb-1">{project.title}</h4>
                <p className="text-blue-400 text-sm">{project.client}</p>
                <span className="inline-block bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full text-xs mt-2">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleToggleEnabled(project.id, !project.enabled)}
                  className={`p-1 rounded ${
                    project.enabled ? 'text-green-400 hover:text-green-300' : 'text-gray-500 hover:text-gray-400'
                  }`}
                  title={project.enabled ? 'Disable project' : 'Enable project'}
                >
                  {project.enabled ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => handleEdit(project)}
                  className="p-1 text-blue-400 hover:text-blue-300"
                  title="Edit project"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-1 text-red-400 hover:text-red-300"
                  title="Delete project"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Timeline:</span>
                <span className="text-gray-300">{project.timeline}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Technologies:</span>
                <span className="text-gray-300">{project.technologies.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Features:</span>
                <span className="text-gray-300">{project.features.length}</span>
              </div>
            </div>

            {project.testimonial && (
              <blockquote className="mt-4 text-xs text-gray-400 italic border-l-2 border-blue-500 pl-3">
                "{project.testimonial.substring(0, 100)}..."
              </blockquote>
            )}
          </div>
        ))}

        {portfolioProjects.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-400">
            <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg mb-2">No portfolio projects yet</p>
            <p className="text-sm mb-4">Create your first portfolio project to showcase your work</p>
            <button
              onClick={handleCreate}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
            >
              <Plus className="h-4 w-4" />
              <span>Add First Project</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioManager;