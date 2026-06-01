import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fail loudly so you can see the issue in the Cloudflare Build Logs if keys are missing
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "CRITICAL CRASH: Supabase environment variables are missing from the build environment! " +
    "Check your Cloudflare Pages project settings configuration tab."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);