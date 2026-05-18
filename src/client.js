import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_API_KEY'

export const supabase = createClient(URL, API_KEY)
