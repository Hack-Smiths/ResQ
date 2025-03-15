const db = require("../db");

// Get Nearest Ambulance
exports.getNearestAmbulance = (req, res) => {
    const userLocation = req.params.location;

    db.query("SELECT * FROM Ambulances WHERE status = 'available' ORDER BY location LIMIT 1", 
        (err, result) => {
            if (err) return res.status(500).json({ error: err });

            if (result.length === 0) return res.status(404).json({ message: "No ambulances available" });

            res.status(200).json({ ambulance: result[0] });
        });
};
