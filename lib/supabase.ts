import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto'

const url = 'https://eclipse-planner.supabase.co';
const anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aGRjeGtocm9wZG1ueXRpaWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzQyMDIsImV4cCI6MjAxMjA1MDIwMn0.RUdMvotH9Rh5PW9rfK4b-QoATsmTFvDkKiiy7lowjCA';

export const supabase = createClient(url, anon_key, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
})
