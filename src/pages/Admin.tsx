import React, { useState } from 'react';
import AdminDashboard from '../components/Admin/AdminDashboard';

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate a short delay
    setTimeout(() => {
      if (form.username === 'Charlie' && form.password === 'Chazf123!') {
        setUser({ name: 'Charlie' });
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    setUser(null);
    setForm({ username: '', password: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg w-80"
        >
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Admin Login
          </h2>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-6 px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }

  return <AdminDashboard user={user} onLogout={handleLogout} />;
};

export default Admin;
