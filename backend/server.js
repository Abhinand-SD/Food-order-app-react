import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Enable CORS (fixes frontend fetch issues)
app.use(cors());

// Sample restaurant data (since no database)
const restaurants = [
    { id: 1, name: "Pizza Palace", cuisine: "Italian" },
    { id: 2, name: "Sushi World", cuisine: "Japanese" },
    { id: 3, name: "Burger Haven", cuisine: "American" }
];

// Define the /api/restaurants route
app.get("/api/restaurants", (req, res) => {
    try {
        res.json(restaurants);
    } catch (error) {
        console.error("🔥 Error fetching data:", error);
        res.status(500).json({ error: "Error fetching data", details: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
