import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import AdminLogin from '../components/Admin/AdminLogin';
import AdminDashboard from '../components/Admin/AdminDashboard';

const Admin = () => {
  const { user, loading, signOut } = useAuth();

  const handleLogin = (userData: any) => {
    // User state is automatically updated by useAuth hook
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard user={user} onLogout={signOut} />;
};

export default Admin;