import { useState, useEffect } from 'react';

export interface ContactForm {
  id: number;
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  budget?: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'completed';
  notes?: string;
}

export interface NewsletterSubscriber {
  id: number;
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
}

export interface DashboardStats {
  totalForms: number;
  newForms: number;
  totalSubscribers: number;
  recentForms: ContactForm[];
  recentSubscribers: NewsletterSubscriber[];
  blogPosts: any[];
  monthlyGrowth: {
    forms: number;
    subscribers: number;
  };
}

export const useRealData = () => {
  const [forms, setForms] = useState<ContactForm[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterSubscriber[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalForms: 0,
    newForms: 0,
    totalSubscribers: 0,
    recentForms: [],
    recentSubscribers: [],
    monthlyGrowth: { forms: 0, subscribers: 0 },
    blogPosts: []
  });

  // Load data from localStorage
  useEffect(() => {
    const loadData = () => {
      // Load contact forms
      const storedForms = localStorage.getItem('contactForms');
      const formsData = storedForms ? JSON.parse(storedForms) : [];
      setForms(formsData);

      // Load newsletter subscribers
      const storedNewsletter = localStorage.getItem('newsletterSubscribers');
      const newsletterData = storedNewsletter ? JSON.parse(storedNewsletter) : [];
      setNewsletter(newsletterData);

      // Load blog posts
      const storedBlogPosts = localStorage.getItem('blogPosts');
      const blogPostsData = storedBlogPosts ? JSON.parse(storedBlogPosts) : [];
      setBlogPosts(blogPostsData);

      // Calculate stats
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const newForms = formsData.filter((form: ContactForm) => form.status === 'new').length;
      const recentForms = formsData
        .sort((a: ContactForm, b: ContactForm) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
        .slice(0, 5);
      
      const recentSubscribers = newsletterData
        .sort((a: NewsletterSubscriber, b: NewsletterSubscriber) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime())
        .slice(0, 5);

      const monthlyForms = formsData.filter((form: ContactForm) => 
        new Date(form.submittedAt) >= thirtyDaysAgo
      ).length;

      const monthlySubscribers = newsletterData.filter((sub: NewsletterSubscriber) => 
        new Date(sub.subscribedAt) >= thirtyDaysAgo
      ).length;

      setStats({
        totalForms: formsData.length,
        newForms,
        totalSubscribers: newsletterData.length,
        recentForms,
        recentSubscribers,
        blogPosts: blogPostsData,
        monthlyGrowth: {
          forms: monthlyForms,
          subscribers: monthlySubscribers
        }
      });
    };

    loadData();

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'contactForms' || e.key === 'newsletterSubscribers' || e.key === 'blogPosts') {
        loadData();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateFormStatus = (id: number, status: string, notes?: string) => {
    const updatedForms = forms.map(form => 
      form.id === id 
        ? { ...form, status: status as ContactForm['status'], notes, updatedAt: new Date().toISOString() }
        : form
    );
    setForms(updatedForms);
    localStorage.setItem('contactForms', JSON.stringify(updatedForms));
  };

  const deleteForm = (id: number) => {
    const updatedForms = forms.filter(form => form.id !== id);
    setForms(updatedForms);
    localStorage.setItem('contactForms', JSON.stringify(updatedForms));
  };

  const deleteSubscriber = (id: number) => {
    const updatedNewsletter = newsletter.filter(sub => sub.id !== id);
    setNewsletter(updatedNewsletter);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(updatedNewsletter));
  };

  return {
    forms,
    newsletter,
    blogPosts,
    stats,
    updateFormStatus,
    deleteForm,
    deleteSubscriber
  };
};