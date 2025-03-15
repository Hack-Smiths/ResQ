const db = require("../db");

// User Login
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM Users WHERE email = ?", [email], (err, result) => {
        if (err) return res.status(500).json({ error: err });

        if (result.length === 0) return res.status(401).json({ message: "Invalid email or password" });

        res.status(200).json({ message: "Login successful", user: result[0] });
    });
};

// User Registration
exports.registerUser = (req, res) => {
    const { name, email, password, user_type } = req.body;

    db.query("INSERT INTO Users (name, email, password, user_type) VALUES (?, ?, ?, ?)",
        [name, email, password, user_type], 
        (err, result) => {
            if (err) return res.status(500).json({ error: err });

            res.status(201).json({ message: "User registered successfully!" });
        });
};
