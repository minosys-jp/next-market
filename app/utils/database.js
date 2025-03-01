import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
"https://gdpcgkqgsuemaxqvoeft.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkcGNna3Fnc3VlbWF4cXZvZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2ODc2MTUsImV4cCI6MjA1NjI2MzYxNX0.hIZiOLVIjrJKrUMjY-11xi99PPCdGOzCvIpuQdu3Hv4"
);

export default supabase;
