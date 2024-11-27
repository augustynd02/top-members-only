/*
    This script is meant to populate your database with necessary tables and data.
    You can run it via npm setup-database, or node utils/setupDatabase.
    Please make sure to set up your .env file accordingly to config/database.js
*/
const pool = require('../config/database');

const query = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    membership_id INTEGER
);

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER
);

CREATE TABLE IF NOT EXISTS memberships (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO memberships (id, name)
VALUES
    (1, 'guest'),
    (2, 'member'),
    (3, 'admin')
ON CONFLICT (id) DO NOTHING;

CREATE TABLE IF NOT EXISTS session (
    sid VARCHAR PRIMARY KEY,
    sess JSON NOT NULL,
    expire TIMESTAMP(6) WITHOUT TIME ZONE NOT NULL
);
`;

async function main() {
    console.log("Attempting to create and populate the database... Remember to set up your .env file.");
    try {
        await pool.query(query);
        console.log("Database tables created and populated successfully!");
    } catch (err) {
        console.error("Error executing query:", err);
    }
}

main();
