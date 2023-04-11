import { createClient } from '@supabase/supabase-js'

const URL = 'https://ffgbuevmyhtmleijauuf.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZ2J1ZXZteWh0bWxlaWphdXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5OTY2MTcsImV4cCI6MTk5NjU3MjYxN30.5wkNJ_n8nmHCodjk3NHdMxIU0TJhy3H99qIWUdUZU20';

export const supabase = createClient(URL, API_KEY);
