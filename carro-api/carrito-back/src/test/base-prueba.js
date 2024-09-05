const pool = require('../config/db');

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('Database connection successful:', rows);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

testConnection();
