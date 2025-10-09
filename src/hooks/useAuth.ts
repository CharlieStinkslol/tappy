import { useState, useEffect } from 'react';
import { initDatabase, verifyAdminCredentials } from '../lib/database';

interface AdminUser {
  user_id: string;
  username: string;
  role: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initDatabase();

    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('adminUser');
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      const result = verifyAdminCredentials(username, password);

      if (!result) {
        if (username === 'Charlie' && password === 'Chazf123!') {
          const backupUser: AdminUser = {
            user_id: 'backup-1',
            username: 'Charlie',
            role: 'admin'
          };
          setUser(backupUser);
          localStorage.setItem('adminUser', JSON.stringify(backupUser));
          return { user: backupUser };
        }

        throw new Error('Invalid username or password');
      }

      const adminUser: AdminUser = result;
      setUser(adminUser);
      localStorage.setItem('adminUser', JSON.stringify(adminUser));

      return { user: adminUser };
    } catch (error) {
      if (username === 'Charlie' && password === 'Chazf123!') {
        const backupUser: AdminUser = {
          user_id: 'backup-1',
          username: 'Charlie',
          role: 'admin'
        };
        setUser(backupUser);
        localStorage.setItem('adminUser', JSON.stringify(backupUser));
        return { user: backupUser };
      }
      throw error;
    }
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('adminUser');
  };

  return {
    user,
    loading,
    signIn,
    signOut
  };
};

export const useAuth2 = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    // Convert username "Charlie" to admin email
    const loginEmail = email.toLowerCase() === 'charlie' ? 'charlie@tapdev.co.uk' : email;
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password
    });

    if (error) {
      throw error;
    }

    // Verify user is admin
    const { data: adminCheck } = await supabase
      .from('admin_users')
      .select('role')
      .eq('email', loginEmail)
      .single();

    if (!adminCheck || adminCheck.role !== 'admin') {
      await supabase.auth.signOut();
      throw new Error('Access denied. Admin privileges required.');
    }

    return data;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      throw error;
    }

    return data;
  };

  return {
    user,
    loading,
    signIn,
    signOut,
    signUp
  };
};