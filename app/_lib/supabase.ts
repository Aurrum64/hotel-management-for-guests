import { createClient } from "@supabase/supabase-js";
// import { Database } from './types/supabase-schema'

const supabase = createClient(
  /* <Database> */ process.env.SUPABASE_KEY as string,
  process.env.SUPABASE_KEY as string,
);

export default supabase;
