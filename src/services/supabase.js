import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://apbuylfswlgwckhbodid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwYnV5bGZzd2xnd2NraGJvZGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTI5MTcsImV4cCI6MjAxODA2ODkxN30.t8bUFOvyvpR1MR3ueythYZKAkFDs3E2UtPqa-iVvPEw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;