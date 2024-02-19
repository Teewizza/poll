// Importing required modules
const express = require("express");
const fs = require("fs").promises;
const path = require("path");

// Creating an Express application
const app = express();

// Path to the data file
const dataFile = path.join(__dirname, "data.json");

// Middleware to support POSTing form data with URL encoded
app.use(express.urlencoded({ extended: true }));

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// Endpoint to handle GET requests for poll data
app.get("/poll", async (req, res) => {
    try {
        // Read data from the file
        let data = JSON.parse(await fs.readFile(dataFile, "utf-8"));

        // Calculate total votes
        const totalVotes = Object.values(data).reduce((total, n) => total += n, 0);

        // Format data for response
        data = Object.entries(data).map(([label, votes]) => {
            return {
                label,
                percentage: (((100 * votes) / totalVotes) || 0).toFixed(0)
            };
        });

        // Send JSON response
        res.json(data);
    } catch (error) {
        // Handle errors
        console.error("Error reading data file:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to handle POST requests for updating poll data
app.post("/poll", async (req, res) => {
    try {
        // Read current data from the file
        const data = JSON.parse(await fs.readFile(dataFile, "utf-8"));

        // Increment the vote count for the selected option
        data[req.body.add]++;

        // Write updated data back to the file
        await fs.writeFile(dataFile, JSON.stringify(data));

        // Send a successful response
        res.end();
    } catch (error) {
        // Handle errors
        console.error("Error updating data file:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Start the server on port 3000
app.listen(3000, () => console.log("Server is running on port 3000..."));
