const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

location = {}
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to track location
app.post('/track-location', (req, res) => {
  const { latitude, longitude, timestamp } = req.body;

  // Log the location data
  console.log(`Location received at ${timestamp}:`);
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  location = req.body
  // Send a response to confirm receipt of data
  res.status(200).json({ message: 'Location received successfully' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send(location);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 