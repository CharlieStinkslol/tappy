interface AdminUser {
  user_id: string;
  username: string;
  password: string;
  role: string;
}

const ADMIN_USERS_KEY = 'admin_users_db';

const defaultUsers: AdminUser[] = [
  {
    user_id: '1',
    username: 'Charlie',
    password: 'Chazf123!',
    role: 'admin'
  }
];

export const initDatabase = () => {
  const existing = localStorage.getItem(ADMIN_USERS_KEY);
  if (!existing) {
    localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(defaultUsers));
  }
};

export const verifyAdminCredentials = (username: string, password: string) => {
  try {
    const usersJson = localStorage.getItem(ADMIN_USERS_KEY);
    const users: AdminUser[] = usersJson ? JSON.parse(usersJson) : defaultUsers;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      return {
        user_id: user.user_id,
        username: user.username,
        role: user.role
      };
    }

    return null;
  } catch (error) {
    return null;
  }
};
