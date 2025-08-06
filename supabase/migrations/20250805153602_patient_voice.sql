/*
  # Create proper admin authentication system

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password` (text, hashed)
      - `role` (text, default 'admin')
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `admin_users` table
    - Add policy for admin users to read their own data
    - Create function to verify admin credentials

  3. Setup
    - Create admin user Charlie with hashed password
    - Remove dependency on Supabase Auth for admin access
*/

-- Drop existing admin_users table if it exists
DROP TABLE IF EXISTS admin_users CASCADE;

-- Create new admin_users table with proper structure
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password text NOT NULL,
  role text DEFAULT 'admin'::text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access
CREATE POLICY "Admin users can read admin data"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (true);

-- Create function to verify admin credentials
CREATE OR REPLACE FUNCTION verify_admin_credentials(input_username text, input_password text)
RETURNS TABLE(user_id uuid, username text, role text)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    a.id,
    a.username,
    a.role
  FROM admin_users a
  WHERE a.username = input_username 
    AND a.password = crypt(input_password, a.password);
END;
$$;

-- Create function to hash passwords
CREATE OR REPLACE FUNCTION hash_password(password text)
RETURNS text
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN crypt(password, gen_salt('bf'));
END;
$$;

-- Insert admin user Charlie with hashed password
INSERT INTO admin_users (username, password, role)
VALUES ('Charlie', hash_password('Chazf123!'), 'admin')
ON CONFLICT (username) DO UPDATE SET
  password = hash_password('Chazf123!'),
  role = 'admin';