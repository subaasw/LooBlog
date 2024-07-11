import mysql from "mysql2"

/*
 * Firstly Lets create an table users table
 * CREATE TABLE IF NOT EXISTS users( 
 *      id int NOT NULL AUTO_INCREMENT, 
 *      username VARCHAR(50) NOT NULL,
 *      email VARCHAR(255) UNIQUE,
 *      password VARCHAR(255) NOT NULL,
 *      img text,
 *      PRIMARY KEY(id)
 * )
 * 
 * Create Posts table 
 * CREATE TABLE posts(
 *      id INT NOT NULL AUTO_INCREMENTS,
 *      title VARCHAR(255) NOT NULL,
 *      `desc` TEXT NOT NULL, // desc is a reserved word so it wont added directly
 *      img TEXT NOT NULL, 
 *      date DATETIME NOT NULL,
 *      uid INT NOT NULL,
 * 
 *      PRIMARY KEY (id),
 *      FOREIGN KEY (uid) REFERENCES users(id) ON DELETE CASCADE
 * )
*/

export const db = mysql.createConnection({
    host: process.env.HOSTNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME
})