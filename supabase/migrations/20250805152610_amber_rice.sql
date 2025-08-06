/*
  # Create Admin User

  1. New Tables
    - Updates admin_users table with specific admin credentials
  
  2. Security
    - Maintains RLS policies for admin access
    - Creates admin user with username and password authentication
*/

-- Insert admin user with username Charlie and password Chazf123!
INSERT INTO admin_users (email, role) 
VALUES ('charlie@tapdev.co.uk', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Note: The actual authentication will be handled by Supabase Auth
-- You'll need to create a user in Supabase Auth dashboard with:
-- Email: charlie@tapdev.co.uk
-- Password: Chazf123!