import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

export const getSupabaseClient = (): SupabaseClient | null => {
  if (!hasSupabaseConfig) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
};

export const supabaseConfigNotice =
  'Configuration Supabase manquante : ajoutez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY avant d’activer les fonctionnalités côté serveur.';
