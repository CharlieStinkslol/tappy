/*
  # Create Admin User

  1. Create admin user for authentication
    - Email: admin@tapdev.co.uk
    - Password: TapDev2024!
    
  Note: This creates a user in Supabase Auth, not a custom table
*/

-- This migration creates an admin user through Supabase Auth
-- The actual user creation needs to be done through the Supabase dashboard or API
-- For now, we'll create a placeholder that documents the admin credentials

-- Create a simple admin_users table for reference
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text DEFAULT 'admin',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only authenticated users can read admin_users"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert admin user reference
INSERT INTO admin_users (email, role) 
VALUES ('admin@tapdev.co.uk', 'admin')
ON CONFLICT (email) DO NOTHING;