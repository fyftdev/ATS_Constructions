import { createClient } from "@supabase/supabase-js";

// Replace these with your actual Supabase Project URL and Anon Key from your Supabase Dashboard
const supabaseUrl = "https://wsffbuqgkphpuzmtfzjt.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZmZidXFna3BocHV6bXRmemp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMDgxOTcsImV4cCI6MjA5NDY4NDE5N30.nLXGkczwOrmKpnlAQklYuOHMY8n0zUmAaQZ_xjmjj18";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
