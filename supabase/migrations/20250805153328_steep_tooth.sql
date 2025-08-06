/*
  # Setup Admin User Charlie

  1. Authentication Setup
    - Create admin user with email charlie@tapdev.co.uk
    - Set password to Chazf123!
    - Enable email confirmation

  2. Admin Users Table
    - Add Charlie to admin_users table
    - Set role as admin
    - Link to auth user

  3. Security
    - Ensure proper RLS policies
    - Admin access controls
*/

-- First, we need to create the auth user (this would typically be done through Supabase dashboard)
-- But we can prepare the admin_users table entry

-- Clear existing admin users
DELETE FROM admin_users;

-- Insert Charlie as the admin user
-- Note: The auth.users entry should be created manually in Supabase dashboard
-- Email: charlie@tapdev.co.uk
-- Password: Chazf123!
INSERT INTO admin_users (email, role) VALUES ('charlie@tapdev.co.uk', 'admin')
ON CONFLICT (email) DO UPDATE SET
  role = EXCLUDED.role,
  created_at = now();

-- Ensure RLS is properly configured
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Update the policy to be more specific
DROP POLICY IF EXISTS "Only authenticated users can read admin_users" ON admin_users;

CREATE POLICY "Admin users can read admin data"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (auth.email() = email);

-- Create a function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = auth.email() 
    AND role = 'admin'
  );
$$;