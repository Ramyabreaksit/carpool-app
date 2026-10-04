const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// In-memory storage for ride posts
let rides = [];

// Get all rides
app.get('/api/rides', (req, res) => {
  res.json(rides);
});

// Post a new ride
app.post('/api/rides', (req, res) => {
  const { from, to, date, seats, contact } = req.body;
  if (!from || !to || !date || !seats || !contact) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newRide = {
    id: Date.now(),
    from,
    to,
    date,
    seats,
    contact
  };
  rides.push(newRide);
  res.json(newRide);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});