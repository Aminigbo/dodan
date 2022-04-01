let { createClient } = require("@supabase/supabase-js");

// export const supabase = () => {
//    return createClient('https://rtxiicnfcvolulrkryhi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjg4OTk5NSwiZXhwIjoxOTQyNDY1OTk1fQ.5Du7PcPHlXo6LSuDkc0BwFrdfMg3Ou-312cuZf-ILRs')
// }

export const supabase = () => {
  return createClient(
    "https://lbntetnvjiexnoqusvfp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDE4MDIxMiwiZXhwIjoxOTQ1NzU2MjEyfQ.b_uGc8G73UR8RdgYKlFilYZBnEqN0k1hj8W8tEqUXHM"
  );
};
