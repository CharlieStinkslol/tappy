import { useState, useEffect } from 'react';
import { supabase, ContactForm, NewsletterSubscriber, BlogPost, PortfolioProject, ServicePage, HomepageContent } from '../lib/supabase';

export interface DashboardStats {
  totalForms: number;
  newForms: number;
  totalSubscribers: number;
  recentForms: ContactForm[];
  recentSubscribers: NewsletterSubscriber[];
  blogPosts: BlogPost[];
  monthlyGrowth: {
    forms: number;
    subscribers: number;
  };
}

export const useSupabaseData = () => {
  const [forms, setForms] = useState<ContactForm[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterSubscriber[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([]);
  const [servicePages, setServicePages] = useState<ServicePage[]>([]);
  const [homePage, setHomePage] = useState<HomepageContent | null>(null);
  const [stats, setStats] = useState<DashboardStats>({
    totalForms: 0,
    newForms: 0,
    totalSubscribers: 0,
    recentForms: [],
    recentSubscribers: [],
    blogPosts: [],
    monthlyGrowth: { forms: 0, subscribers: 0 }
  });
  const [loading, setLoading] = useState(true);

  // Load all data
  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      setLoading(true);
      await Promise.all([
        loadForms(),
        loadNewsletter(),
        loadBlogPosts(),
        loadPortfolioProjects(),
        loadServicePages(),
        loadHomePage()
      ]);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadForms = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_forms')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) {
        console.error('Error loading forms:', error);
        setForms([]);
        calculateStats([]);
        return;
      }

      setForms(data || []);
      calculateStats(data || []);
    } catch (err) {
      console.error('Error loading forms:', err);
      setForms([]);
      calculateStats([]);
    }
  };

  const loadNewsletter = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (error) {
        console.error('Error loading newsletter:', error);
        setNewsletter([]);
        return;
      }

      setNewsletter(data || []);
    } catch (err) {
      console.error('Error loading newsletter:', err);
      setNewsletter([]);
    }
  };

  const loadBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error loading blog posts:', error);
        setBlogPosts([]);
        return;
      }

      setBlogPosts(data || []);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setBlogPosts([]);
    }
  };

  const loadPortfolioProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error loading portfolio:', error);
        setPortfolioProjects([]);
        return;
      }

      setPortfolioProjects(data || []);
    } catch (err) {
      console.error('Error loading portfolio:', err);
      setPortfolioProjects([]);
    }
  };

  const loadServicePages = async () => {
    try {
      const { data, error } = await supabase
        .from('service_pages')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error loading service pages:', error);
        setServicePages([]);
        return;
      }

      setServicePages(data || []);
    } catch (err) {
      console.error('Error loading service pages:', err);
      setServicePages([]);
    }
  };

  const loadHomePage = async () => {
    try {
      const { data, error } = await supabase
        .from('homepage_content')
        .select('*')
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading homepage:', error);
        setHomePage(null);
        return;
      }

      setHomePage(data);
    } catch (err) {
      console.error('Error loading homepage:', err);
      setHomePage(null);
    }
  };

  const calculateStats = (formsData: ContactForm[]) => {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const newForms = formsData.filter(form => form.status === 'new').length;
    const recentForms = formsData.slice(0, 5);
    const monthlyForms = formsData.filter(form => 
      new Date(form.submitted_at) >= thirtyDaysAgo
    ).length;

    setStats(prev => ({
      ...prev,
      totalForms: formsData.length,
      newForms,
      recentForms,
      monthlyGrowth: { ...prev.monthlyGrowth, forms: monthlyForms }
    }));
  };

  // Contact form operations
  const submitContactForm = async (formData: Omit<ContactForm, 'id' | 'submitted_at' | 'updated_at' | 'status' | 'notes'>) => {
    const { data, error } = await supabase
      .from('contact_forms')
      .insert([formData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    await loadForms();
    return data;
  };

  const updateFormStatus = async (id: string, status: string, notes?: string) => {
    const { error } = await supabase
      .from('contact_forms')
      .update({ status, notes, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadForms();
  };

  const deleteForm = async (id: string) => {
    const { error } = await supabase
      .from('contact_forms')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadForms();
  };

  // Newsletter operations
  const subscribeNewsletter = async (email: string) => {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    await loadNewsletter();
    return data;
  };

  const deleteSubscriber = async (id: string) => {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadNewsletter();
  };

  // Blog operations
  const createBlogPost = async (postData: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([postData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    await loadBlogPosts();
    return data;
  };

  const updateBlogPost = async (id: string, updates: Partial<BlogPost>) => {
    const { error } = await supabase
      .from('blog_posts')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadBlogPosts();
  };

  const deleteBlogPost = async (id: string) => {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadBlogPosts();
  };

  // Portfolio operations
  const createPortfolioProject = async (projectData: Omit<PortfolioProject, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .insert([projectData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    await loadPortfolioProjects();
    return data;
  };

  const updatePortfolioProject = async (id: string, updates: Partial<PortfolioProject>) => {
    const { error } = await supabase
      .from('portfolio_projects')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadPortfolioProjects();
  };

  const deletePortfolioProject = async (id: string) => {
    const { error } = await supabase
      .from('portfolio_projects')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadPortfolioProjects();
  };

  // Service page operations
  const createServicePage = async (serviceData: Omit<ServicePage, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('service_pages')
      .insert([serviceData])
      .select()
      .single();

    if (error) {
      throw error;
    }

    await loadServicePages();
    return data;
  };

  const updateServicePage = async (id: string, updates: Partial<ServicePage>) => {
    const { error } = await supabase
      .from('service_pages')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadServicePages();
  };

  const deleteServicePage = async (id: string) => {
    const { error } = await supabase
      .from('service_pages')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    await loadServicePages();
  };

  // Homepage operations
  const updateHomePage = async (updates: Partial<HomepageContent>) => {
    const { error } = await supabase
      .from('homepage_content')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', homePage?.id);

    if (error) {
      throw error;
    }

    await loadHomePage();
  };

  return {
    // Data
    forms,
    newsletter,
    blogPosts,
    portfolioProjects,
    servicePages,
    homePage,
    stats,
    loading,
    
    // Contact form operations
    submitContactForm,
    updateFormStatus,
    deleteForm,
    
    // Newsletter operations
    subscribeNewsletter,
    deleteSubscriber,
    
    // Blog operations
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    
    // Portfolio operations
    createPortfolioProject,
    updatePortfolioProject,
    deletePortfolioProject,
    
    // Service page operations
    createServicePage,
    updateServicePage,
    deleteServicePage,
    
    // Homepage operations
    updateHomePage,
    
    // Utility
    loadAllData
  };
};