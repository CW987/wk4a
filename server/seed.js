import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DB_CONN-STRING
})









// SQL queries go here to create the tables and dummy data for testing
// ! If you use SQL editor on supabase please copy and paste those queries here
// if database pool is setup on the server you import it here