const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // Change as per your SQL Server settings
    database: "ResQ"
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed: ", err);
        return;
    }
    console.log("✅ Database connected successfully!");
});

module.exports = db;
