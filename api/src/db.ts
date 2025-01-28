import postgres from 'postgres';
import 'dotenv/config';

const connectionStr = process.env.DATABASE_URL;
const sql = postgres(connectionStr);

export default sql
