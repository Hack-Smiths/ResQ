const express = require("express");
const cors = require("cors");
const db = require("./db");

// Import Routes
const userRoutes = require("./routes/userRoutes");
const ambulanceRoutes = require("./routes/ambulanceRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/ambulances", ambulanceRoutes);
app.use("/api/hospitals", hospitalRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
