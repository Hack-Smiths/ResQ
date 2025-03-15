const db = require("../db");

// Get Nearest Hospital
exports.getNearestHospital = (req, res) => {
    const userLocation = req.params.location;

    db.query("SELECT * FROM Hospitals ORDER BY location LIMIT 1", 
        (err, result) => {
            if (err) return res.status(500).json({ error: err });

            if (result.length === 0) return res.status(404).json({ message: "No hospitals found" });

            res.status(200).json({ hospital: result[0] });
        });
};
