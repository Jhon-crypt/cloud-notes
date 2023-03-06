
import { createClient } from '@supabase/supabase-js'

const supabase_config : any = {
    url : process.env.REACT_APP_SUPABASE_URL,
    key : process.env.REACT_APP_SUPABASE_KEY
}

const supabase = createClient(supabase_config.url, supabase_config.key)

export default supabase
//every single choice you make to invest in your self has an impact in your future, whether positively or negtively