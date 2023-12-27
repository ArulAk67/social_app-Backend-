import mysql from "mysql";
import dotenv from 'dotenv';
dotenv.config();

export  const db =mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });
  
  // You can also listen for the 'error' event to handle errors during the connection
  db.on('error', (err) => {
    console.error('Database error:', err);
  });
