const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Sample data for search
const data = [
    'Paris',
    'New York City',
    'Tokyo',
    'London',
    'Berlin',
];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Search route
app.post('/api/search', (req, res) => {
    const { query } = req.body;
    const results = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    res.json({ results });
});

// Start server
app.listen(PORT, () => {
    console.log(`Search Master server is running on port ${PORT}`);
});
