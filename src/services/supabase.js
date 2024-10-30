import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://crfyrzkdiwyhtqfgoyls.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZnlyemtkaXd5aHRxZmdveWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODcwNDQsImV4cCI6MjA0MjE2MzA0NH0.a5RmjXSePXlBxy3_l2hnkg0H7Tj4DGhWTotfvQZqf_8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
